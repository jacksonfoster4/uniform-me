from rest_framework import serializers
from .models import Request
from inventory.serializers import ItemSerializer
from inventory.models import Item
from employee.models import Employee
from employee.serializers import EmployeeSerializer

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ("id", "employee", "item", "quantity", "date", "active")

class UpdateRequestSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all())
    employee = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all())

    class Meta:
        model = Request
        fields = ("id", "employee", "item", "quantity", "date", "active")

class ListRequestSerializer(serializers.ModelSerializer):
    # returns item and employee dicts in response
    item = ItemSerializer(read_only=True)
    employee = EmployeeSerializer(read_only=True)

    class Meta:
        model = Request
        fields = ("id", "employee", "item", "quantity", "date", "active")
