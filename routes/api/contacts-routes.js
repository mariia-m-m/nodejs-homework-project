const express = require('express')

const router = express.Router();

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");

const {schemas}= require("../../models/contacts")

router.get('/',ctrl.getAllContacts)

router.get('/:contactId', ctrl.getContactByID)

router.post('/', validateBody(schemas.addSchema) ,ctrl.addContact)

router.put('/:contactId', validateBody(schemas.addSchema), ctrl.updateContact);

router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrl.updateContact);

router.delete('/:contactId', ctrl.deleteContact);


module.exports = router
