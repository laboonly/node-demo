
import express from 'express'
import Menu from '../controller/menu';
import Search from '../controller/search';
import Chapter from '../controller/chapter'
const router = express.Router();


router.get('/getmenu', Menu.getMenu);
router.get('/search/:searchkey', Search.getResult);
router.get('/chapter/:url', Chapter.getChapter);

export default router