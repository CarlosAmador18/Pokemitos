from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, 
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('/api/user/register', UserRegisterView.as_view(), name ='register'),
]
