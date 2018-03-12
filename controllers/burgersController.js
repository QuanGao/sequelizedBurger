const db = require("../models");
const express = require("express");
const router = express.Router();

console.log("hello" + db.burger);

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

// router.put("/api/burgers/:id", function (req, res) {
//     let condition = {
//         id: req.params.id
//     };
//     let toEaten = {
//         devoured: true
//     }

//     burger.updateBurger(toEaten, condition, function (result) {
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     })
// });

router.delete("/api/burgers/:id", function (req, res) {

    db.Burger.destroy({
        where: {
            id: req.params.id 
        }
    }).then (result => result.affectedRows === 0 ? 
        res.status(404).end():res.status(200).end())
})

module.exports = router;