from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Add URL patterns for your Django apps here
    path('admin/', admin.site.urls),  # Admin site URL
    path('pilgrimage/', include('myapp.urls')),  # Include URLs from your 'pilgrimage' app
]

