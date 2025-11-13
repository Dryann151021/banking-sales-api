const ClientError = require('../exceptions/ClientError');

// eslint-disable-next-line no-unused-vars
const errorHandler = (e, req, res, next) => {
  if (e instanceof ClientError) {
    return res.status(e.statusCode).json({
      status: 'fail',
      message: e.message,
    });
  }

  // error duplikat username
  if (e.code === '23505') {
    return res.status(400).json({
      status: 'fail',
      message: 'Username sudah digunakan.',
    });
  }

  // error tak terduga
  console.log(e);
  res.status(500).json({
    status: 'error',
    message: 'Terjadi kegagalan pada server kami.',
  });
};

module.exports = errorHandler;
