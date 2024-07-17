const { validationResult } = require("express-validator");
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "141.136.43.151",
  user: "u188495358_pvAPMDB1",
  password: "9830pvAPM9831@@",
  database: "u188495358_pvAPMDB1",
  waitForConnections: true,
  multipleStatements: true,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
  supportBigNumbers: true,
  bigNumberStrings: true,
});

const promisePool = pool.promise();

exports.projectRegister = async (req, res) => {
  let connection;
  try {
    const {
      country,
      state,
      city,
      projectCapacity,
      moduleType,
      moduleCapacity,
      inverterType,
      structureType,
      season1,
      tiltAngle1,
      season2,
      tiltAngle2,
      irradiation,
      plantGeneration,
      emailID,
      latitude,
      longitude,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array()[0].msg);
      return res
        .status(400)
        .json({ error: errors.array()[0].msg, sucess: false });
    }
    connection = await promisePool.getConnection();
    await connection.beginTransaction();
    const [result, rows] =
      await connection.query(`INSERT INTO projectReg_pvFLEET (Country, State, CityOrRegion, ProjectCapacity_mWp, ModuleType,
             ModuleCapacity_Wp, InverterType, StructureType, Season1,TiltAngle1,Season2,TiltAngle2, AnnualIrradiation,PlantGeneration,
              EmailID, Latitude, Longitude) VALUES (
            '${country}', ${state ? `'${state}'` : null}, ${
        city ? `'${city}'` : null
      }, ${projectCapacity},'${moduleType}', ${moduleCapacity},
             '${inverterType}', '${structureType}', ${
        season1 ? `'${season1}'` : null
      }, ${tiltAngle1},${
        season2 ? `'${season2}'` : null
      },${tiltAngle2}, ${irradiation}, ${plantGeneration},
              '${emailID}', '${latitude.toString()}', '${longitude.toString()}')`);
    await connection.commit();
    return res.status(200).json({ result, sucess: true });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message, sucess: false });
  } finally {
    connection?.release();
  }
};

exports.getAllProjects = async (req, res) => {
  let connection;
  try {
    connection = await promisePool.getConnection();
    await connection.beginTransaction();
    const [result, rows] = await connection.query(
      "select * from projectReg_pvFLEET"
    );
    await connection.commit();
    return res.status(200).json({ result, sucess: true });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message, sucess: false });
  } finally {
    connection?.release();
  }
};
