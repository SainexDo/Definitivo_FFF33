from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.helloworld, name='hello-world')
]