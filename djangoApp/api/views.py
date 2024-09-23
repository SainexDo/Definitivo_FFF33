# @api_view(["Get", "POST", "PUT", "Delete"])
# def Users (request):
#     return Response({
#         "users": [
#             {
#                 'id': '878787',
#                 'name': 'John Doe',
#                 'age': 30
#             },
#         ]
#     })
    


# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from .serializers import userSerializer

@api_view(["GET", "POST", "PUT", "DELETE"])
def Toys(request):
    return Response({
        "toys": ['Boss', 'Greg', 'Jordy']
    })

@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        users = Users.objects.all()  # Obtener todos los juguetes de la base de datos
        serializer = userSerializer(users, many=True)  # Serializar los juguetes
        return Response(serializer.data)  # Retornar la lista de juguetes

    elif request.method == 'POST':
        print(request.data)
        serializer = userSerializer(data=request.data)  # Crear una nueva instancia del serializador
        if serializer.is_valid():  # Verificar que los datos son válidos
            serializer.save()  # Guardar el nuevo juguete en la base de datos
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Retornar datos del nuevo juguete
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Retornar errores sihay