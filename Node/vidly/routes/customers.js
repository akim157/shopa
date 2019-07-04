const { Cutomer, validate } = require('../models/customer'); //.Customer
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    idGold: req.body.idGold
  });
  await customer.save();

  res.send(customer);
});

router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const сustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );

    if (!сustomer)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(сustomer);
});

router.delete("/:id", async (req, res) => {
    const сustomer = await Customer.findByIdAndRemove(req.params.id);

    if (!сustomer)
        return res.status(404).send("The genre with the given ID was not found.");

    res.send(сustomer);
});



module.exports = router;
