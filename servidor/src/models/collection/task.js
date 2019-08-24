const mongoose = require("../connect");
var mon = require('mongoose');
var Schema = mon.Schema;

var LabSchema = new Schema({
  Ltipo: {type: String }, // lab1 lab2
  Lnombre: { type: String }, //nombre de laboratorio
  Lnota: { type: Number },
  Lci: { type: Number },
  Lalumno: { type: String },
  Lmateria: { type: String },
  Ldocente: { type: String },
  Lestados: { type: String },
  fecha: { type: Date }
});

var labos = mongoose.model('Lab', LabSchema);
module.exports = labos;
