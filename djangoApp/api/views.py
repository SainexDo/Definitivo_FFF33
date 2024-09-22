from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response

@api_view(["Get", "POST", "PUT", "Delete"])
def toys (request):
    return Response({
        "users": [
            {
                'id': '878787',
                'name': 'John Doe',
                'age': 30
            },
        ]
    })