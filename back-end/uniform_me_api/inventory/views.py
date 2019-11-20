from django.shortcuts import render
from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer

# Create your views here.
class ListItemsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class RetrieveItemView(generics.RetrieveAPIView):
    """
    Provides a get method handler.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class CreateItemView(generics.CreateAPIView):
   
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class UpdateItemView(generics.UpdateAPIView):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer