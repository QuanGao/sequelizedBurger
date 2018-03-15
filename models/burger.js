module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        burger_count:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    });

    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer, {
            onDelete: "cascade"
        })}

    return Burger;
}
