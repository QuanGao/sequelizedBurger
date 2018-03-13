module.exports = function (sequelize, dataTypes) {
    const Customer = sequelize.define ("Customer", {
        name: dataTypes.STRING,
    });

    Customer.assoicate = function (models) {
        Customer.belongsTo(models.Burger, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Customer;

}