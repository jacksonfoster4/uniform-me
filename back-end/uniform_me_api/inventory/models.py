from django.db import models
from datetime import date
from django.utils import timezone
# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True)
    size = models.CharField(max_length=255, blank=True)
    last_modified=models.DateField(default=timezone.now())
    quantity = models.IntegerField()
    need_to_reorder = models.BooleanField(default=False)
    reorder_point = models.IntegerField(blank=True)


    def __str__(self):
        if self.size:
            return "{} - ({})".format(self.name, self.size)
        return self.name


    def set_reorder_point(self):
        # if user hasnt specified a reorder point, set it to 2 times the last inventory out event
        if not self.reorder_point:
            self.reorder_point = InventoryEvent.objects.filter(item=self)[0].change * 2


    def save(self, *args, **kwargs):
        if self.id:
            previous = Item.objects.get(id=self.id).quantity

            self.set_reorder_point()
            
            if self.quantity != previous:
                InventoryEvent(
                    start_quantity=previous, 
                    end_quantity=self.quantity, 
                    item=self,
                    date=self.last_modified
                    ).save()

        super(Item, self).save(*args, **kwargs)



class InventoryEvent(models.Model):
    # used to log when inventory changes
    start_quantity = models.IntegerField(blank=False)
    end_quantity = models.IntegerField(blank=False)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, blank=False)
    date = models.DateField(blank=False)


    def __str__(self):
        if self.delta() > 0:
            return "Incoming - {}".format(self.date)
        return "Outgoing - {}".format(self.date)


    def delta(self):
        return self.end_quantity - self.start_quantity