'use strict';
import express from 'express';
import {user_post, user_get} from '../controllers/userController';

const router = express.Router();
//router.post('/', user_post);
router.post('/', (req, res) => {
    console.log("requete : ", req.body)
    res.json(req.body)
})


router.get('/:id', user_get);
export default router;