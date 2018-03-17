module.exports = function (sequelize, dataTypes) {
    const Customer = sequelize.define ("Customer", {
        name: {
            type:dataTypes.STRING,
            allowNull:false
        },
        burger_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    });

    Customer.assoicate = function (models) {
        Customer.hasOne(models.Burger)
    }
    return Customer;
}