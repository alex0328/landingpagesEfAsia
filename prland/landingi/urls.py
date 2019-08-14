from django.urls import path, include, re_path
from landingi import views
    


app_name = 'landingi'
urlpatterns = [
    path('detoxiclp/', views.DetoxiclpView.as_view(), name='detoxiclp'),
    path('acelp/', views.AcelpView.as_view(), name='acelp')
]