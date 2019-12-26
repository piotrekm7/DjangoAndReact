from rest_framework.routers import DefaultRouter
from students import views

router = DefaultRouter()
router.register(r'students', views.StudentViewSet)
