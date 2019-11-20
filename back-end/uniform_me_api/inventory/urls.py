from django.urls import path
from . import views
 
urlpatterns = [
    path("", views.ListItemsView.as_view()),
    path("<int:pk>", views.RetrieveItemView.as_view()),
    path('new/', views.CreateItemView.as_view()),
    path('<int:pk>/edit/', views.UpdateItemView.as_view())
]