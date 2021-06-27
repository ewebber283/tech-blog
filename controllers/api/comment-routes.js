const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'body']
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    if(req.session) {
    Comment.create({
        body: req.body.body,
        user_id: req.session.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: "No comment found with this id"});
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;