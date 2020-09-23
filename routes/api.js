
import express from 'express'
import Menu from '../controller/menu';
import Search from '../controller/search';
import Chapter from '../controller/chapter'
import User from '../controller/user'
const router = express.Router();


router.get('/getmenu', Menu.getMenu);
router.get('/search/:searchkey', Search.getResult);
router.get('/chapter/:url', Chapter.getChapter);
router.get('/getUserInfo',User.getUserInfo)

export default router