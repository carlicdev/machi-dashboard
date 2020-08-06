const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/clients');

router.get('/', clientCtrl.get_all_clients);

router.get('/:id', clientCtrl.get_client);

router.post('/new-client', clientCtrl.create_new_client);

router.delete('/delete-client/:id', clientCtrl.delete_client);

router.patch('/update/:id', clientCtrl.update_client);

module.exports = router;