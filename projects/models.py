from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    

class Project(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    link = models.CharField(max_length=250)
    #image = models.ImageField(upload_to='images')
    image = models.CharField(max_length=250)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name