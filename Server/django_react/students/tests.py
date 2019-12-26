from django.test import TestCase
from students.models import Student


class StudentTestCase(TestCase):

    def setUp(self) -> None:
        self.student_data = {
            'name': 'Walt Kowalski',
            'email': 'walt.kowalski@example.com',
            'document': 'aa22ss',
            'phone': '+48123123123'
        }

    def create_student(self) -> Student:
        return Student.objects.create(**self.student_data)

    def test_student_creation(self) -> None:
        student = self.create_student()
        self.assertTrue(isinstance(student, Student))
        self.assertEqual(str(student), student.name)
