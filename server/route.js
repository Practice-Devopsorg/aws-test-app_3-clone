const router = require("express").Router();

const { projectRegister, getAllProjects} = require("./Controllers/pvFleetController");
const { registerProjectValidation } = require("./utils/projectRegister.validation");


router.route("/pvfleet/project-register").post(registerProjectValidation, projectRegister)
router.route("/pvfleet/all-project").get(getAllProjects)


module.exports = router;