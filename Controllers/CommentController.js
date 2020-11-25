var Comment = require('../Mongo/Schema/Comment');


//Create ONE comment
exports.action_createComment = async (req, res, next) => {
        const createdComment = await Comment.create({
            text: req.body.text,
            author_name: req.body.author_name
        });
        createdComment.save()
            .then(result => {
                res.status(202).json({
                    message: "Comment created!",
                    createdComment: result
                })
            })
            .catch(err => {
                return next(err);
            })
};

//Get ONE comment
exports.action_getComment = async (req, res, next) => {
    try {
        const comment = await Comment.find({_id: req.params.id});
        res.json(comment)
    } catch (err) {
        next(err);
    }
};

//Get ALL Comments
exports.action_getAllComments = async (req, res, next) => {
    const actionType = req.query.actionType;
    try{
        const items = await Comment.find({}).sort({'created_at': -1});
        res.json(items);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

//Delete ONE comment
exports.action_deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.deleteOne({_id: req.params.id});
        res.json(comment)
    } catch (err) {
        next(err);
    }
};