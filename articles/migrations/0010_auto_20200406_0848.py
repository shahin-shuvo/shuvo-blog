# Generated by Django 3.0.5 on 2020-04-06 08:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0009_userdata'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userdata',
            old_name='userName',
            new_name='username',
        ),
    ]