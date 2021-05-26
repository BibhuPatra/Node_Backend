const { check, validationResult } = require('express-validator');
exports.validateSignupRequest = [
	check('firstName').notEmpty().withMessage('Firstname is required'),
	check('lastName').notEmpty().withMessage('Lastname is required'),
	check('lastName'),
	check('email').isEmail().withMessage('valid Email is required'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 charcter long'),
];
exports.validateSigninRequest = [
	check('email').isEmail().withMessage('valid Email is required'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 charcter long'),
];

exports.isRequestValidated = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.array().length > 0) {
		return res.status(400).json({ errors: errors.array()[0].msg });
	}
	next();
};

// const errors = validationResult(req);
// return res.status(400).json({errors:errors.array()})
