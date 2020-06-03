module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", tutorials.create);
  
    // Retrieve all recipes
    router.get("/", recipes.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/recipes', router);
};