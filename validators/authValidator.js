const { check } = require('express-validator');

const registerValidator = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be between 3 and 50 characters'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('role')
    .optional()
    .isIn(['agent', 'manager', 'admin'])
    .withMessage('Role must be agent, manager, or admin'),
];

const loginValidator = [
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .notEmpty()
    .withMessage('Password is required'),
];

module.exports = { registerValidator, loginValidator };
