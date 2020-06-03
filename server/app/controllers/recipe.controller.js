const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Retrieve all recipes from the database
exports.findAllRecipes = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Recipe.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving recipes."
            });
        });
};