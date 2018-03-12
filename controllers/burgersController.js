const db = require("../models");
const express = require("express");
const router = express.Router();


router.get("/index", (req, res) => {
    db.Burger.findAll({}).then(hbsObji => res.render("index", hbsObji))
});

router.post("/api/burgers", function (req, res) {
    let newBurgerData = {
        "burger_name": req.body.burger_name,
    }

    db.Burger.create(newBurgerData).then(result => res.json({
        id: result.insertId
    }));

});

router.put("/api/burgers/:id", (req, res) => {
    db.Burger.update({ devoured: true }, {
        where: {
            id: req.params.id
        }
    }).then(result => { 
        return result.changedRows == 0 ?
        res.status(404).end() : res.status(200).end()
    })
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