const mongoose = require('mongoose');

const recoveryActionSchema = new mongoose.Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
      required: [true, 'Invoice is required'],
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: [true, 'Client is required'],
    },
    actionType: {
      type: String,
      enum: ['phone_call', 'email', 'letter', 'visit', 'legal'],
      required: [true, 'Action type is required'],
    },
    note: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    result: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    actionDate: {
      type: Date,
      default: Date.now,
    },
    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('RecoveryAction', recoveryActionSchema);
