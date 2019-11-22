from rest_framework import serializers
from .models import Employee
from request.models import Request

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ("id", "name", "role", "start_date", "specialty", "notes")

class RequestsForEmployee(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ("id", "quantity")