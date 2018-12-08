module.exports = function(sequelize, DataTypes) {

    var Users = sequelize.define("users", {
      // Giving the Author model a name of type STRING
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

    });
    return Users;
  };