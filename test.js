const { MongoClient } = require("mongodb");

async function test() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ Kết nối MongoDB thành công!");
    const dbs = await client.db().admin().listDatabases();
    console.log(dbs);
  } catch (err) {
    console.error("❌ Lỗi kết nối MongoDB:", err);
  } finally {
    await client.close();
  }
}

test();