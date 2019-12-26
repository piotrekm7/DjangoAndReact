from django.test import TestCase
from students.models import Student


class StudentTestCase(TestCase):

    def create_student(self):
        return Student.objects.create(
            name='Walt Kowalski',
            email='walt.kowalski@example.com',
            document='aa22ss',
            phone='+48123123123'
        )

    def test_student_creation(self):
        student = self.create_student()
        self.assertTrue(isinstance(student, Student))
        self.assertEqual(str(student), student.name)
