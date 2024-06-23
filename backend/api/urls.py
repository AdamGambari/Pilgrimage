from django.urls import path
from . import views  # Edit this line to import your views

urlpatterns = [
    # Add URL patterns for your views here
    path('', views.index, name='index'),  # Example URL pattern
    path('about/', views.about, name='about'),  # Example URL pattern
]
