const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api",
  require("./routes/applicationRoutes")
);

app.get("/", (req, res) => {
  res.send("Fire NOC Backend Running");
});

app.listen(8000, () => {
  console.log(
    "Server Running on Port 8000"
  );
});