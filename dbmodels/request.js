const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  requester: {
    type: String,
    required: true,
  },
  requester_id: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  blood: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  additionalInfo: {
    type: String,
  },
  requester_email: {
    type: String,
    required: true,
  },
  requester_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("requests", requestSchema);