# Generated by Django 2.2.7 on 2019-11-22 22:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0016_auto_20191122_2240'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='last_modified',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='reorder_point',
            field=models.IntegerField(default=0),
        ),
    ]
