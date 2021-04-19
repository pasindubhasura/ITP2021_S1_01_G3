const router = require('express').Router();
const branchController = require('../controllers/branch.controller');

router.post('/add', branchController.post_addBranch);
router.get('/', branchController.get_allBranch);
router.put('/update/:id', branchController.put_updateBranch);
router.delete('/delete/:id', branchController.delete_Branch);
router.get('/get/:id', branchController.get_oneBranch);

module.exports = router;