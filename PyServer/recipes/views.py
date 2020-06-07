from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from recipes.models import Recipe
from recipes.serializers import RecipeSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def recipe_list(request):
    # GET list of recipes, POST a new recipe, DELETE all recipes
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        
        ethnicity = request.GET.get('ethnicity', None)
        if ethnicity is not None:
            recipes = recipes.filter(ethnicity__icontains=ethnicity)
        
        recipes_serializer = RecipeSerializer(recipes, many=True)
        return JsonResponse(recipes_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        recipe_data = JSONParser().parse(request)
        recipe_serializer = RecipeSerializer(data=recipe_data)
        if recipe_serializer.is_valid():
            recipe_serializer.save()
            return JsonResponse(recipe_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(recipe_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Recipe.objects.all().delete()
        return JsonResponse({'message': '{} Recipes were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def recipe_detail(request, pk):
    # find recipe by pk (id)
    try: 
        recipe = Recipe.objects.get(pk=pk) 
    except Recipe.DoesNotExist: 
        return JsonResponse({'message': 'The recipe does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE recipe
    if request.method == 'GET': 
        recipe_serializer = RecipeSerializer(recipe) 
        return JsonResponse(recipe_serializer.data) 
 
    elif request.method == 'PUT':
        recipe_data = JSONParser().parse(request) 
        recipe_serializer = RecipeSerializer(recipe, data=recipe_data) 
        if recipe_serializer.is_valid(): 
            recipe_serializer.save() 
            return JsonResponse(recipe_serializer.data) 
        return JsonResponse(recipe_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        recipe.delete() 
        return JsonResponse({'message': 'recipe was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        
@api_view(['GET'])
def recipe_list_ethnicity(request):
    # GET all recipes by ethnicity
    recipes = Recipe.objects.filter(published=True)
        
    if request.method == 'GET': 
        recipes_serializer = RecipeSerializer(recipes, many=True)
        return JsonResponse(recipes_serializer.data, safe=False)