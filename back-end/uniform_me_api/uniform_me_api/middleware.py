from employee.models import Employee
from inventory.models import Item

class CheckForAlertsMiddleware():
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):

        # check if employee has been longer for 30 days
        employees = Employee.objects.filter(has_thirty_day_alert__isnull=True)
        for employee in employees:
            if employee.older_than_thirty_days():
                employee.has_thirty_day_alert = True
                employee.save()

        # check if items need to be reordered
        items = Item.objects.all()
        for item in items:
            if item.reorder_point:
                if item.quantity <= item.reorder_point:
                    item.need_to_reorder = True
                    item.save()
                elif item.quantity > item.reorder_point:
                    item.need_to_reorder = False
                    item.save()

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response