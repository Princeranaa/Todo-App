const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// requiren database file
const db = require("../Backend/config/Database");
db.DatabaseConnection();

const routes = require("../Backend/routes/routes");
app.use("/user", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
