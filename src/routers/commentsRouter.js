import express from 'express';
import { withAsync } from '../lib/withAsync.js';
import { updateComment, deleteComment } from '../controllers/commentsController.js';

const commentsRouter = express.Router();

commentsRouter
    .route('/:id')
    .patch(withAsync(updateComment))
    .delete(withAsync(deleteComment));

export default commentsRouter;
