# Generated by Django 3.0.5 on 2020-04-06 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0014_auto_20200406_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='postID',
            field=models.CharField(max_length=520),
        ),
    ]
