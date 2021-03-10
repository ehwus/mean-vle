const connectToDatabase = require("./config/connect-db");
const server = require("./server/server");
const port = process.env.PORT || 5000;

require("dotenv").config();

connectToDatabase();

server.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
