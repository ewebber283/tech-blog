const User = require('./User');
const Post = require("./Post");
const Comment = require('./Comment');


Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
})

module.exports = { User, Post, Comment };