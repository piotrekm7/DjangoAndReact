from rest_framework import viewsets
from students.models import Student
from students.serializers import StudentSerializer


class StudentViewSet(viewsets.ModelViewSet):
    """API endpoint for listing and creating students"""
    queryset = Student.objects.order_by('registration_date')
    serializer_class = StudentSerializer
