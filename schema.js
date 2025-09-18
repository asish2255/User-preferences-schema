// schema.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Notifications sub-schema (embedded)
 */
const notificationsSchema = new Schema({
  email: {
    type: Boolean,
    default: true
  },
  sms: {
    type: Boolean,
    default: false
  }
}, { _id: false });

/**
 * Preferences sub-schema (embedded)
 */
const preferencesSchema = new Schema({
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light'
  },
  language: {
    type: String,
    default: 'en',
    trim: true
  },
  notifications: {
    type: notificationsSchema,
    default: () => ({}) // ensures notifications object exists with defaults
  }
}, { _id: false });

/**
 * User Preferences main schema
 */
const userPreferencesSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true
  },
  preferences: {
    type: preferencesSchema,
    required: [true, 'Preferences object is required'],
    default: () => ({}) // make sure preferences exists with nested defaults
  }
}, {
  timestamps: true
});

// Ensure unique index for username at DB level
userPreferencesSchema.index({ username: 1 }, { unique: true });

const UserPreferences = mongoose.model('UserPreferences', userPreferencesSchema);

module.exports = UserPreferences;
