from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Request
from .serializers import RequestSerializer, ListRequestSerializer
from employee.models import Employee
from inventory.models import Item
from django.utils import timezone

# Create your views here.
class ListRequestsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Request.objects.all().order_by('-active')
    serializer_class = ListRequestSerializer
    
    def get_queryset(self):
        return get_demo_or_regular_queryset(Request, self.context.request)
       

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

    def post(self, request):
        if not request.data['date']:
            request.data['date'] = timezone.now().date()
        s = RequestSerializer(data=request.data)
        if s.is_valid():
            s.save()
            return Response(s.data, status=200)
        return Response(s.errors, status=400) 

class UpdateRequestView(generics.UpdateAPIView):
    
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class DestroyRequestView(generics.DestroyAPIView):
    
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

def get_demo_or_regular_queryset(model, request):
    if request['demo']:
        return model.objects.using('demo').all()
    else:
        return model.objects.all()