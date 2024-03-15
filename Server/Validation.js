const Joi = require("joi");

const validator = (schema) => (payload) => {
  return schema.validate(payload, { abortEarly: false });
};

const LawDataSchema = Joi.object({
  law: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  year: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
  country: Joi.string().required(),
  createdBy: Joi.string().required()
});

const userData = Joi.object({
  userName:Joi.string().required()
})

const validateUser = validator(userData);

const validateData = validator(LawDataSchema);

module.exports = { validateData,validateUser };
