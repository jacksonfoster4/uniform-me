# Generated by Django 2.2.7 on 2019-11-20 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0004_auto_20191120_0434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]