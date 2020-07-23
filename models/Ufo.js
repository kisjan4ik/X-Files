
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("Ufo", {
    datetime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shape: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration_seconds: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration_hours_min: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_posted: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: false
    },
  });

  return User;
};