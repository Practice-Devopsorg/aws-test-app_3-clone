const express = require("express")
const application = express();
const bodyparser = require("body-parser")
const cors = require("cors");
const handleRoutes = require("./route")
const PORT = 6000


application.use(cors())
application.use(bodyparser.urlencoded({ extended: true }))
application.use(express.json())
application.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
application.use(handleRoutes)


process.on("uncaughtException", err => {
  console.log("Server is closing due to uncaughtException occured!")
  console.log("Error :", err.message)
  server.close(() => {
    process.exit(1);
  })
})

const server = application.listen(PORT || 4000, () => {
  console.log("Server is running at port " + server.address().port);
});


process.on("unhandledRejection", err => {
  console.log("Server is closing due to unhandledRejection occured!")
  console.log("Error is:", err.message)
  server.close(() => {
    process.exit(1);
  })
})





