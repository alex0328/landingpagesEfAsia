from django.shortcuts import render

# Create your views here.
from django.views import View


class DetoxiclpView(View):
    def get(self, request):
        return render(request, 'detoxiclp.html')

class AcelpView(View):
    def get(self, request):
        return render(request, 'acelp.html')
