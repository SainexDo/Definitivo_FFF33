from rest_framework import serializers
from .models import Users

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'name', 'age', 'mail', 'password'] #Aquí va lo que uno quiere ver en la api 
                                                                    #Solo es visual (No afecta nada).