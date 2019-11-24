from django.db import models
from inventory.models import Item
from employee.models import Employee

# Create your models here.
class Request(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, blank=False)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, blank=False)
    quantity = models.IntegerField()
    notes = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return "{} request for {} {} - {}".format(self.employee.name, self.quantity, self.item.name, 'Active' if self.active else 'Not Active' )
