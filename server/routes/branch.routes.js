const router = require('express').Router();
const branchController = require('../controllers/branch.controller');

router.post('/add', branchController.post_addBranch);
router.get('/', branchController.get_allBranch);
router.put('/update/:id', branchController.put_updateBranch);
router.post('/delete/:id', branchController.delete_Branch);
router.post('//get/:id', branchController.get_oneBranch);