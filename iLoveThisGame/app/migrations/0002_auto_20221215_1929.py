# Generated by Django 3.2.13 on 2022-12-15 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='colorPrincipal',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='articulo',
            name='talla',
            field=models.CharField(max_length=10),
        ),
    ]
