const labsCtrl = {};

const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

const TASK = require('../models/collection/task');

labsCtrl.getLaboratories = async (req, res) => {
    try {
        const labotario = await TASK.find();
        res.json(labotario);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

module.exports = labsCtrl;
