import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  // Startup log for local development verification.
  console.log(`chat-api listening on port ${port}`);
});
