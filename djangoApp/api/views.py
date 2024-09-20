from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['Get'])
def helloworld (request):
    return Response({"message": "JORDY, EL FAMOSO MASTURBA ZOMBIES ES GAY?"})    
