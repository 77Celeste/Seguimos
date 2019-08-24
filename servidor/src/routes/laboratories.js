/*const {Router} = require('express');
const router = Router();*/
const express = require('express');
const router = express.Router();

const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
//const TASK = require('../../../models/collection/../../models/collection/task');

const TASK = require('../models/collection/task');
// GET all Tasks
router.get('/', (req, res) => {
  TASK.find({}).exec((error, docs) => {
    res.status(200).json(docs);
  })
});


/*============BUSCADOR por Docen fechas y labs DE UN DETERMINADO ESTUDIANTE==============*/
router.post('/DocenfechasLabs', (req, res) => {
  /*funcion de rangos*/
  var diasEntreFechas = function(fechaDesde, fechaHasta) {
    var dia_actual = fechaDesde;
    var fechas = [];
    var date, date1, date2;
    while (dia_actual.isSameOrBefore(fechaHasta)) {
      date = dia_actual.format('YYYY');
      date1 = dia_actual.format('MM');
      date2 = dia_actual.format('DD');
      fechas.push({
        'anio': date,
        'mes': date1,
        'dia': date2
      });
      dia_actual.add(1, 'days');
    }
    return fechas;
  };
  var fechaDesde = moment(req.body.desde);
  var fechaHasta = moment(req.body.hasta);
  var results = diasEntreFechas(fechaDesde, fechaHasta);
  var dia = req.body.dia;
  var mes = req.body.mes;
  var anio = req.body.anio;
  var lab = req.body.lab;
  //let idm=params.idma
  var iddo = req.body.docente;
  var labo = [];
  console.log(dia);
  console.log(results);
  TASK.find().select("Ltipo Lnombre Lnota Lci Lalumno Ldocente Lmateria Lestados fecha _id").exec().then((docs) => {
    if (docs != null) {
      docs.forEach(doc => {
        var date = doc.fecha;
        console.log(date);
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var a = date.getFullYear();
        var l = doc.Ltipo;
        console.log({
          mes: m,
          dia: d,
          anio: a
        });
        var doce = doc.Ldocente
        if (doce == iddo) {
          if (results != '') {
            for (var i = 0; i < results.length; i++) {
              if (doc.fecha.getFullYear() == results[i].anio) {
                var mm = doc.fecha.getMonth() + 1;
                if (mm == results[i].mes) {
                  var dd = doc.fecha.getDate();
                  if (dd == results[i].dia && lab == l) {
                    labo.push({
                      tipo: doc.Ltipo,
                      nombre: doc.Lnombre,
                      nota: doc.Lnota,
                      //ci: doc.Lci,
                      //alumno: doc.Lalumno,
                      materia: doc.Lmateria,
                      docente: doc.Ldocente,
                      estado: doc.Lestados,
                      fecha: doc.fecha,
                      idlab: doc._id
                    });
                  } else if (d == results[i].dia && lab == '') {
                    labo.push({
                      tipo: doc.Ltipo,
                      nombre: doc.Lnombre,
                      nota: doc.Lnota,
                      //ci: doc.Lci,
                      //alumno: doc.Lalumno,
                      materia: doc.Lmateria,
                      docente: doc.Ldocente,
                      estado: doc.Lestados,
                      fecha: doc.fecha,
                      idlab: doc._id
                    });
                  }
                }
              }
            }
            return;
          }
          if (l == lab && a == anio && mes == '' && dia == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && mes == '' && dia == '' && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && m == mes && dia == '' && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && m == mes && dia == '' && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && mes == '' && d == dia && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && mes == '' && d == dia && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && m == mes && d == dia && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && m == mes && d == dia && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && m == mes && dia == '' && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && m == mes && dia == '' && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && mes == '' && d == dia && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && mes == '' && d == dia && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && m == mes && d == dia && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (a == anio && m == mes && d == dia && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && mes == '' && dia == '' && lab == '') {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          } else if (anio == '' && mes == '' && dia == '' && l == lab) {
            labo.push({
              tipo: doc.Ltipo,
              nombre: doc.Lnombre,
              nota: doc.Lnota,
              //ci: doc.Lci,
              //alumno: doc.Lalumno,
              materia: doc.Lmateria,
              docente: doc.Ldocente,
              estado: doc.Lestados,
              fecha: doc.fecha,
              idlab: doc._id
            });
          }
        }
      });

      var resul = {
        alumno: "isabel isabel",
        ci: 777,
        docente: iddo,
        cantidad: labo.length,
        Laboratorios: labo
      };

      res.status(200).json(resul);
      return;
    }
    res.status(204).json({
      "msn": "No existe el recurso "
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});


/*const { postLaboratories, getLaboratories, buscarDateLabs, buscarMateriaTfP, buscarDocentes } = require('../controllers/laboratories.controller');

router.route('/')
  .get(getLaboratories)
  .post(postLaboratories);

router.route('/fechasLabs')
  .post(buscarDateLabs);

router.route('/TerFalPenMaterias')
  .post(buscarMateriaTfP);

router.route('/DocenfechasLabs')
  .post(buscarDocentes);
*/
module.exports = router;
