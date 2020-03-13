const dashboardCtrl = {};

const Lead  = require('../models/Leads');

dashboardCtrl.getLeads = async (req, res) => {
    const leads = await Lead.find();
    res.json(leads)
}

module.exports = dashboardCtrl;