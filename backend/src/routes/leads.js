const { Router } = require("express");
const router = Router();
const {
  getLeads,
  createLead,
  getLead,
  updateLead,
  deleteLead,
  
} = require("../controllers/leads.controller");

router
  .route("/")
  .get(getLeads)
  .post(createLead);

router
  .route("/:id")
  .get(getLead)
  .put(updateLead)
  .delete(deleteLead);


module.exports = router;