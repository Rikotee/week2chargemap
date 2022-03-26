'use strict';
import express from 'express';
import passport from '../utils/pass'
import {login, logout} from '../controllers/authController'

const router = express.Router();

router.post('/login',login);

router.post('/logout', logout);

export default router;