# Generated by Django 2.2.7 on 2019-11-20 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0003_auto_20191118_0442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='start_date',
            field=models.DateField(blank=True),
        ),
    ]
