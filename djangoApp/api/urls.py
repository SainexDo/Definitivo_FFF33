from django.urls import path
from . import views

urlpatterns = [
    path('toys/', views.Toys, name='toys'),
    # path('users/', views.Users, name='users'),
    path('users/', views.users_list, name='users_list'),
]