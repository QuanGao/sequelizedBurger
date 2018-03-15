module.exports = function (sequelize, dataTypes) {
    const Customer = sequelize.define ("Customer", {
        name: {
            type:dataTypes.STRING,
            allowNull:false
        }
    });

    Customer.assoicate = function (models) {
        Customer.hasOne(models.Burger)
    }
    return Customer;

}