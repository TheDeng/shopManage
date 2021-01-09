from rest_framework import viewsets
from .models import Shop
from .serializers import ShopSerializer

# Create your views here.
class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer