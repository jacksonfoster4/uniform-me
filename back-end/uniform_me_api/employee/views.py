from django.shortcuts import render
from rest_framework import generics
from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.
class ListEmployeesView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer