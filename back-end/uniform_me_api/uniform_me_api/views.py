from django.shortcuts import render
from django.http import JsonResponse
from employee.models import Employee
from django.utils import timezone
from datetime import timedelta
from inventory.models import Item, InventoryEvent
from request.models import Request
from django.contrib.auth.models import User
from uniform_me_api.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, permissions
from rest_framework.views import APIView



class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class Home(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        return JsonResponse({
        "most_requested_item": self.get_most_requested_item(),
        "thirty_day_alerts": self.get_thirty_day_alerts(),
        "reorder_alerts": self.get_reorder_alerts(),
        "distribution_totals": self.get_distribution_totals(),
        "number_of_active_requests": self.get_number_of_active_requests()
        }, status=200)

    def get_most_requested_item(self):
        tmp = {}
        negative_delta_events = list(filter(lambda x: x.delta() < 0, InventoryEvent.objects.all()))
        for event in negative_delta_events:
            item = event.item
            if item.name in tmp:
                tmp[item.name][0] += 1
            else:
                tmp[item.name] = [1, item.id]
        if tmp:
            def qty(x):
                return tmp[x][0]
            most_requested_item = sorted( tmp, key=qty )[0]
            item_id = tmp[most_requested_item][1]
            return [most_requested_item, item_id] 


    def get_thirty_day_alerts(self):
        # middleware checks and updates objects every request
        return list( Employee.objects.filter( has_thirty_day_alert=True ).values_list('name', flat=True) )


    def get_distribution_totals(self):
        tmp = {}
        # get all items. this accounts for all the different sizes.
        items = set( Item.objects.all().values_list('name', flat=True) )
        
        for item in items:
            total = 0
            negative_delta_events = list(filter(lambda x: x.delta() < 0, InventoryEvent.objects.filter(item__name__contains=item)))
            for event in negative_delta_events:
                total += abs( event.delta() )
            tmp[item] = total
        return tmp


    def get_reorder_alerts(self):
        # middleware checks and updates objects every request
        return list( Item.objects.filter(need_to_reorder=True).values_list('name', flat=True) )


    def get_number_of_active_requests(self):
        return len(
            Request.objects.filter(active=True)
        )