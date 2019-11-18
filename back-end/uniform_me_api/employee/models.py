from django.db import models

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=255, blank=False)
    role = models.CharField(max_length=255, default='worker')
    start_date = models.DateField()
    specialty = models.CharField(max_length=255)

    def __str__(self):
        return self.name

