from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ListEmployeesView.as_view(), name="employees-all"),
    path('<int:pk>', views.RetrieveEmployeeView.as_view()),
    path('new/', views.CreateEmployeeView.as_view()),
    path('<int:pk>/edit/', views.UpdateEmployeeView.as_view()),
]