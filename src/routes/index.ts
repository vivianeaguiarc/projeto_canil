import { Router } from 'express';
import * as Pagecontroller from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();
router.get('/', Pagecontroller.home);
router.get('/dogs', Pagecontroller.dogs);
router.get('/cats', Pagecontroller.cats);
router.get('/fishes', Pagecontroller.fishes);

router.get('/search', SearchController.search);

export default router;