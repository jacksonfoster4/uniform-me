from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.
class ListEmployeesView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class RetrieveEmployeeView(generics.RetrieveAPIView):
    """
    Provides a get method handler.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CreateEmployeeView(generics.CreateAPIView):
    """
    Provides a get method handler.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer