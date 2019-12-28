from rest_framework import serializers
from students.models import Student


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('id', 'name', 'email', 'document', 'phone', 'registration_date')
        read_only_fields = ('registration_date',)
