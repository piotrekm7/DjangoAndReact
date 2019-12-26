from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    document = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

