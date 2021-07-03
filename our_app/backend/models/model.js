const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema({
  sentence: {
    type: String,
    required: true,
  },
  intents: {
    type: String,
    required: true,
  },
  slots: {
    type: String,
  },
  code_mixed_sentence: {
    type: String,
  },
  code_mixed_slots: {
    type: String,
  },
});

const datapoint = mongoose.model("data", DataSchema);

module.exports = datapoint;
