import os
from django.core.wsgi import get_wsgi_application

# Edit the following line to match the name of your Django project and settings file
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

# Get the WSGI application for your Django project
application = get_wsgi_application()
