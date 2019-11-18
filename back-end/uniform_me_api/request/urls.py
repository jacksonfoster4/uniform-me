from django.urls import path
from . import views
 
urlpatterns = [
    path("", views.ListRequestsView.as_view())
]