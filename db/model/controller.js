const Subscription = require('./subscription')

module.exports.add = (data) => {
  console.log(data)
  return new Subscription({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  }).save()
};