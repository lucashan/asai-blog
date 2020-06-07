from rest_framework import serializers 
from recipes.models import Recipe
 
 
class RecipeSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Recipe
        fields = ('id',
                  'name',
                  'ethnicity',
                  'url_path',
                  'image_path',
                  'description',
                  'video_link')