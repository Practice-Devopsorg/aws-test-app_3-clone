const express = require("express")
const application = express();
const bodyparser = require("body-parser")
const cors = require("cors");
const handleRoutes = require("./route")
const PORT = 6000


application.use(
  cors({
    origin: ["http://13.51.76.222:3000", "http://13.51.76.222:6000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 204,
  })
);
application.use(bodyparser.urlencoded({ extended: true }))
application.use(express.json())
application.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
application.use(handleRoutes)

application.get("/", async (req, res) => {
  res.status(200).json({ message: "Getting response", sucess: true });
});

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





