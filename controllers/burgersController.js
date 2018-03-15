const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/index", (req, res) => {
    db.Burger.findAll({
       include:[
           {
               model: db.Customer
           }
       ]
    }).then(data => {

        let burgerData = data.map(a=>a.dataValues)
        res.render("index", {burgers: burgerData})
    })
});

router.post("/api/burgers", (req, res) => {
    let newBurgerData = {
        "burger_name": req.body.burger_name,
    }

    db.Burger.create(newBurgerData).then(result => res.json({
        id: result.insertId
    }));

});

router.put("/api/burgers/:id", (req, res) => {
    db.Burger.update({ 
        devoured: true, 
        CustomerId: req.body.customerID 
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => { 
        return result.changedRows == 0 ?
        res.status(404).end() : res.status(200).end()
    })
})

router.post("/api/customers",(req, res) => {
    db.Customer.create(req.body).then(result => res.json({
        id: result.id
    }));
})

router.delete("/api/burgers/:id", (req, res) => {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => { 
        return result.affectedRows == 0 ?
        res.status(404).end() : res.status(200).end()    
    })
})

module.exports = router;