// Import express dan inisialisasi router
const express = require('express');
const router = express.Router();

// Import middleware untuk autentikasi
const authentications = require('../../middlewares/authentications');

// Import controller yang berisi handler untuk setiap endpoint
const controller = require('./controller');

// Endpoint untuk membuat lead baru (POST)
// Middleware authentications memastikan user telah login/valid
router.post('/', authentications, controller.postLeadController);

// Endpoint untuk mengambil semua data lead (GET)
router.get('/', authentications, controller.getAllLeadsController);

// Endpoint untuk mengambil detail lead berdasarkan ID (GET /:id)
router.get('/:id', authentications, controller.getLeadDetailController);

// Export router agar bisa digunakan di file app utama
module.exports = router;
