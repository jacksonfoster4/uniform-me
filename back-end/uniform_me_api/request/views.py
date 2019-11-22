from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Request
from .serializers import RequestSerializer, ListRequestSerializer
from employee.models import Employee
from inventory.models import Item

# Create your views here.
class ListRequestsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Request.objects.all()
    serializer_class = ListRequestSerializer

class RetrieveRequestView(generics.RetrieveAPIView):
    """
    Provides a get method handler.
    """
    queryset = Request.objects.all()
    serializer_class = ListRequestSerializer

class CreateRequestView(generics.CreateAPIView):
    """
    Provides a get method handler.
    """
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class UpdateRequestView(generics.UpdateAPIView):
    
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class DestroyRequestView(generics.DestroyAPIView):
    
    queryset = Request.objects.all()
    serializer_class = RequestSerializer


        
