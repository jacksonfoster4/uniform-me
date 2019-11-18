from rest_framework import serializers
from .models import Request
from employee.serializers import EmployeeSerializer
from inventory.serializers import ItemSerializer

class RequestSerializer(serializers.ModelSerializer):
    employee = EmployeeSerializer(many=False, read_only=True)
    item = ItemSerializer(many=False, read_only=True)
    class Meta:
        model = Request
        fields = ("id", "employee", "item", "quantity", "date", "active")
    