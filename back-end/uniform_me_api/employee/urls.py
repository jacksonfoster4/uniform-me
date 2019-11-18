from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ListEmployeesView.as_view(), name="employees-all"),
]