from django.urls import path
from . import views
 
urlpatterns = [
    path("", views.ListRequestsView.as_view()),
    path("<int:pk>/", views.RetrieveRequestView.as_view()),
    path('new/', views.CreateRequestView.as_view()),
    path("<int:pk>/edit/", views.UpdateRequestView.as_view()),
    path("<int:pk>/delete/", views.DestroyRequestView.as_view())
]