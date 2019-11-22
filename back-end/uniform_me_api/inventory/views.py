from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Item, InventoryEvent
from .serializers import ItemSerializer
from request.models import Request
from employee.models import Employee

# Create your views here.
class ListItemsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class RetrieveItemView(APIView):
   def get(self, request, *args, **kwargs):
        item = Item.objects.filter(id=kwargs['pk'])
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
            item['events'] = events
            item['requests'] = requests
            return Response(item, status=200)
        return Response(None, status=404)

class CreateItemView(generics.CreateAPIView):
   
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UpdateItemView(generics.UpdateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class DestroyItemView(generics.DestroyAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer