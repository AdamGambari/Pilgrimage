
import os
from django.core.asgi import get_asgi_application

# Edit the following line to match the name of your Django project and settings file
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

# Get the ASGI application for your Django project
application = get_asgi_application()
