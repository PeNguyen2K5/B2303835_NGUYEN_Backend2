const app = require("./app"); // Nạp app.js
const config = require("./app/config"); // Nạp file config/index.js
const mongodb = require("./app/utils/mongodb.util"); // Nạp helper MongoDB

async function startServer() {
  try {
    // Kết nối MongoDB
    await mongodb.connect(config.db.uri);
    console.log("Connected to the database");

    // Chạy server
    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Cannot connect to the database", err);
    process.exit();
  }
}

startServer();