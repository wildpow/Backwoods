const Sequelize = require('sequelize');
const sequelize = new Sequelize('ec2-50-19-88-36.compute-1.amazonaws.com');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

User.sync({force: true}).then(() => {
  return User.create({
    firstName: 'Test',
    lastName: 'User'
  });
});