const router = require("express").Router();
let model = require("../models/model");

router.route("/").get((req, res) => {
  model
    .find({ code_mixed_sentence: { $exists: false } })
    .limit(1)
    .then((datapoints) => res.json(datapoints))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/").post((req, res) => {
  const newData = new model(req.body);
  console.log(newData);

  model
    .findOneAndUpdate({ _id: newData._id }, newData)
    .then(() => res.json("Added needed data"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/test").post((req, res) => {
  const newData = new model(req.body);
  console.log(newData);

  newData
    .save()
    .then(() => res.json("Added needed data"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
