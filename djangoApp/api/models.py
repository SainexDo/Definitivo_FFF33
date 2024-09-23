from django.db import models

# Create your models here.

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    age = models.IntegerField(null=True, blank=True)
    mail =  models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    
# class Toys(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=255)