from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employee
from request.models import Request
from .serializers import EmployeeSerializer
from inventory.models import Item
from rest_framework import permissions

# Create your views here.
class ListEmployeesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        data = []
        employees = Employee.objects.all()
        for employee in employees:
            requests = list(Request.objects.filter(employee=employee, active=True).values())
            employee = employee.__dict__
            employee.pop('_state', None)
            employee['requests'] = requests
            data.append( employee )
        print(data)
        return Response(data, status=200)


class RetrieveEmployeeView(APIView):
   permission_classes = [permissions.IsAuthenticated]

   def get(self, request, *args, **kwargs):
        employee = Employee.objects.filter(id=kwargs['pk'])
        if employee:
            employee = employee[0]
            requests = list(Request.objects.filter(employee=employee).values())
            is_active = lambda x: x['active']
            requests.sort(key=is_active)
            for i, request in enumerate(requests):
                item = Item.objects.filter(id=request['item_id']).values()
                request['item'] = item[0]
                
                requests[i].pop("item_id", None)
                requests[i] = request
            employee = employee.__dict__
            employee.pop('_state', None)
            requests.reverse()
            employee['requests'] = requests
            return Response(employee, status=200)
        return Response(None, status=404)

class CreateEmployeeView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]

    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class UpdateEmployeeView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
   
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class DestroyEmployeeView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
  
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer