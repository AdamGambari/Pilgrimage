from django.contrib import admin
from .models import MyModel  # Edit this line to import your model

# Register your models here

@admin.register(MyModel)  # Edit this line to register your model with the admin interface
class MyModelAdmin(admin.ModelAdmin):
    list_display = ('field1', 'field2', 'created_at', 'updated_at')  # Customize the fields displayed in the admin list view
    search_fields = ('field1', 'field2')  # Define fields that can be searched in the admin interface
    list_filter = ('created_at', 'updated_at')  # Define fields for filtering in the admin interface
