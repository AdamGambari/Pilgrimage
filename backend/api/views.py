from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import MyModel

def index(request):
    queryset = MyModel.objects.all()
    return render(request, 'index.html', {'objects': queryset})

def detail(request, pk):
    obj = get_object_or_404(MyModel, pk=pk)
    return HttpResponse(f'Detail view for {obj}')
