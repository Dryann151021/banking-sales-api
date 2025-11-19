const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');
const controller = require('./controller');

router.post('/leads/:leadId/notes', auth, controller.postNotesController);
router.get('/leads/:leadId/notes', auth, controller.getNotesByLeadIdController);
router.delete('/notes/:noteId', auth, controller.deleteNoteController);

module.exports = router;
