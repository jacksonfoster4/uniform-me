from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Item
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
        item = Item.objects.filter(id=kwargs['pk'])[0]
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
        item['requests'] = requests
        print(item)
        return Response(item, status=200)

class CreateItemView(generics.CreateAPIView):
   
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UpdateItemView(generics.UpdateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer