
module.exports = function (sequelize, DataTypes) {
  var Sighting = sequelize.define("Sighting", {
    date: {
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
    shape: {
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
  });

  return Sighting;
};