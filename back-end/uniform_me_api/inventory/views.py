from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Item, InventoryEvent
from .serializers import ItemSerializer
from request.models import Request
from employee.models import Employee
from rest_framework import permissions

# Create your views here.
class ListItemsView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    """
    Provides a get method handler.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class RetrieveItemView(APIView):
   permission_classes = [permissions.IsAuthenticated]

   def get(self, request, *args, **kwargs):
        item = format_retrieve_response_with_foreign_fields(kwargs['pk'])
        if item:
            dist_totals = distribution_totals(kwargs['pk'])
            item['distribution_totals'] = dist_totals
            return Response(item, status=200)
        return Response(None, status=404)

class CreateItemView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def post(self, request):
        if not request.data['reorder_point']:
            request.data['reorder_point'] = 0
        s = ItemSerializer(data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data, status=200)
        return Response(s.errors, status=400)    

class UpdateItemView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class DestroyItemView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def format_retrieve_response_with_foreign_fields(item_pk):
    item = Item.objects.filter(id=item_pk)
    if item:
        item = item[0]
        events = list(InventoryEvent.objects.filter(item=item).values())
        requests = list(Request.objects.filter(item=item).values())
        is_active = lambda x: x['active']
        requests.sort(key=is_active)            

        for i, request in enumerate(requests):
            employee = Employee.objects.filter(id=request['employee_id']).values()
            request['employee'] = employee[0]

            requests[i].pop("item_id", None)
            requests[i] = request

        item = item.__dict__
        item.pop('_state', None)
        events.reverse()
        item['events'] = events
        item['requests'] = requests
        return item
    return False

def distribution_totals(item_pk):
    item = Item.objects.filter(id=item_pk)[0]
    total = 0
    negative_delta_events = list(filter(lambda x: x.delta() < 0, InventoryEvent.objects.filter(item=item)))
    for event in negative_delta_events:
        total += abs( event.delta() )
    return total