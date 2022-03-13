const router = require = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    addThoughts,
    updateThoughts,
    removeThoughts,
    addReaction,
    removeReaction
} = ('../../controllers/thought-controller')

router
.route('/')
.get(getAllThoughts)

router
    .route('/:userId')
    .post(addThoughts)

router
    .route('/:thoughtId')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(removeThoughts)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)
