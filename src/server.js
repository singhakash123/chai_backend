import dotenv from "dotenv"
import { connectDb } from "./db/index.js"
import { app } from "./app.js"


// dotenv config 

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 5000;

(async () => {
  try {
    await connectDb();

    const server = app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });

    server.on("error", (error) => {
      console.error("❌ Server startup failed:", error.message);
      process.exit(1);
    });

  } catch (error) {
    console.error("❌ Startup failed:", error.message);
    process.exit(1);
  }
})();
