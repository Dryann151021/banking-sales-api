const Joi = require('joi');
const InvariantError = require('../../exceptions/InvariantError');

const noteSchema = Joi.object({
  body: Joi.string().required(),
});

const noteValidatePayload = (payload) => {
  const { e } = noteSchema.validate(payload);
  if (e) {
    throw new InvariantError(e.message);
  }
};

module.exports = noteValidatePayload;
