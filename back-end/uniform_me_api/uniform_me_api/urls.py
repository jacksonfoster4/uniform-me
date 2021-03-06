"""uniform_me_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here
from . import views

urls = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('users/', views.UserList.as_view()),
        path('users/<int:pk>/', views.UserDetail.as_view()),
        path('home/', views.Home.as_view()),
        path('employees/', include('employee.urls')),
        path('inventory/', include('inventory.urls')),
        path('requests/', include('request.urls')), 
        path('auth/', obtain_auth_token),

    ]))
]
urlpatterns = [
    path('demo/', include(urls)),
    *urls
]