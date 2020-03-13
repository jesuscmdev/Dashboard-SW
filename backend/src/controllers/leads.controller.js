const leadsCtrl = {};
const Lead = require("../models/Leads");

// Leads
leadsCtrl.getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
 
};

// Nuevo Lead
leadsCtrl.createLead = async (req, res) => {
  const {
    fecha,
    nick,
    nombre,
    tel,
    mail,
    preg,
    medio,
    interes,
    seguimiento,
    nomseg,
    llegocita,
    valinicial,
    tratamiento,
    desctrat,
    cupon,
    desccupon,
    comentario
  } = req.body;
  const newLead = new Lead({
    fecha,
    nick,
    nombre,
    tel,
    mail,
    preg,
    medio,
    interes,
    seguimiento,
    nomseg,
    llegocita,
    valinicial,
    tratamiento,
    desctrat,
    cupon,
    desccupon,
    comentario
  });
  await newLead.save();
  res.json({ message: "Lead guardado" });
};
// Update a lead
leadsCtrl.updateLead = async (req, res) => {
  const {
    nick,
    nombre,
    tel,
    mail,
    preg,
    medio,
    interes,
    seguimiento,
    nomseg,
    llegocita,
    valinicial,
    tratamiento,
    desctrat,
    cupon,
    desccupon,
    comentario
  } = req.body;
  await Lead.findOneAndUpdate(req.params.id, {
    nick: nick,
    nombre: nombre,
    tel: tel,
    mail: mail,
    preg: preg,
    medio: medio,
    interes: interes,
    seguimiento: seguimiento,
    nomseg: nomseg,
    llegocita: llegocita,
    valinicial: valinicial,
    tratamiento: tratamiento,
    desctrat: desctrat,
    cupon: cupon,
    desccupon: desccupon,
    comentario: comentario
  });

  res.json({ message: "Lead actualizado" });
};

// Delete a lead
leadsCtrl.deleteLead = async (req, res) => {
  await Lead.findOneAndDelete(req.params.id);
  res.json({ message: "Lead eliminado" });
};
// Get a lead
leadsCtrl.getLead = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  res.json(lead);
};
module.exports = leadsCtrl;
