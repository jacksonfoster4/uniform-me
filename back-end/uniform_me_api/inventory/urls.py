from django.urls import path
from . import views
 
urlpatterns = [
    path("", views.ListItemsView.as_view())
]