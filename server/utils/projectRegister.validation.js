const { body } = require("express-validator");

exports.registerProjectValidation = [
  body("country")
    .exists({ checkFalsy: true })
    .withMessage("Country is required")
    .isString()
    .withMessage("Country should be a string"),

  body("projectCapacity")
    .exists({ checkFalsy: true })
    .withMessage("Project Capacity is required")
    .isNumeric()
    .withMessage("Project Capacity should be a number"),

  body("moduleType")
    .exists({ checkFalsy: true })
    .withMessage("ModuleType is required")
    .isString()
    .withMessage("ModuleType should be a string"),
  body("moduleCapacity")
    .exists({ checkFalsy: true })
    .withMessage("Module Capacity is required")
    .isNumeric()
    .withMessage("Module Capacity should be a number"),
  body("inverterType")
    .exists({ checkFalsy: true })
    .withMessage("Inverter Type is required")
    .isString()
    .withMessage("Inverter Type should be a string"),
  body("structureType")
    .exists({ checkFalsy: true })
    .withMessage("Structure Type is required")
    .isString()
    .withMessage("Structure Type should be a string"),
  body("tiltAngle1")
    .exists({ checkFalsy: true })
    .withMessage("Tilt Angle is required")
    .isNumeric()
    .withMessage("Tilt Angle should be a number"),
  body("irradiation")
    .exists({ checkFalsy: true })
    .withMessage("Irradiation is required")
    .isNumeric()
    .withMessage("Irradiationshould be a number"),
  body("plantGeneration")
    .exists({ checkFalsy: true })
    .withMessage("Plant Generation is required")
    .isNumeric()
    .withMessage("Plant Generation should be a number"),
  body("emailID")
    .exists({ checkFalsy: true })
    .withMessage("EmailID is required")
    .isString()
    .withMessage("EmailID should be a string"),
  body("latitude")
    .exists({ checkFalsy: true })
    .withMessage("Latitude is required")
    .isNumeric()
    .withMessage("Latitude should be a number"),
  body("longitude")
    .exists({ checkFalsy: true })
    .withMessage("Longitude is required")
    .isNumeric()
    .withMessage("Longitude should be a number"),
];
