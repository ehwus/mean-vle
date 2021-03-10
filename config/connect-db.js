const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mean-vle";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
