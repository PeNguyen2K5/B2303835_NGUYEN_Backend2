const { MongoClient } = require("mongodb");

class MongoDB {
  static client = null;

  static async connect(uri) {
    if (this.client) return this.client;

    try {
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      console.log("✅ Connected to MongoDB");
      this.client = client;
      return this.client;
    } catch (error) {
      console.error("❌ Cannot connect to MongoDB:", error);
      throw error;
    }
  }
}

module.exports = MongoDB;
