from django.test import TestCase
from .models import MyModel

class MyModelTestCase(TestCase):
    def test_model_creation(self):
        obj = MyModel.objects.create(field1='Test', field2=123)
        self.assertEqual(obj.field1, 'Test')
        self.assertEqual(obj.field2, 123)
