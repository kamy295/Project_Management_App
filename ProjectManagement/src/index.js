import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/database.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

// connect to db then only listen to the port
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connnection Error", error);
    process.exit(1);
  });
