from django.apps import AppConfig

class MyAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'  # Define the default auto field for models
    name = 'pilgrimage'  # Replace 'myapp' with the actual name of your Django app
