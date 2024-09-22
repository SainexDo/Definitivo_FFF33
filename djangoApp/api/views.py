from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['Get'])
def helloworld (request):
    return Response({"message": "JORDY, EL FAMOSO MASTURBA ZOMBIES ES GAY?"})    

@api_view(['Get'])
def toys (request):
    return Response({"toys": ['01', '02', '03', '04', '05']})    
