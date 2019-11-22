from django.db import models
from django.utils import timezone
from datetime import timedelta

# Create your models here.
class Employee(models.Model):
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=255, default='worker')
    start_date = models.DateField(blank=True, null=True)
    specialty = models.CharField(max_length=255, blank=True, null=True)
    has_thirty_day_alert = models.BooleanField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
    
    def older_than_thirty_days(self):
        if self.start_date:
            return self.start_date <= (timezone.now()-timedelta(days=30)).date()

