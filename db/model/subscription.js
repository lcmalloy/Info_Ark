const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
});

const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;