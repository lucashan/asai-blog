module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name: {
            type: Sequelize.STRING
        },
        url_path: {
            type: Sequelize.STRING
        },
        ethnicity: {
            type: Sequelize.STRING
        },
        image_path: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        video_link: {
            type: Sequelize.STRING
        }
    });
  
    return Recipe;
};