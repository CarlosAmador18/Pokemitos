from django.shortcuts import render
from rest_framework.decorators import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny

class UserRegisterView(generics.CreateAPIView):
    queryset = User.object.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

