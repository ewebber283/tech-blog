const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

// post model
class Post extends Model {}

Post.init(
    {
     
    },
    {
      sequelize,
      
    }
  );

  module.exports = Post;