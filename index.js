const app = require("./app");

const initiliseDB = require("./config/mongoose");

const port = process.env.PORT;
const app = express();
const db = require("./config/mongoose");

app.listen(port, () => console.log("Server is Running at", port));
