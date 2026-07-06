import cors from "cors";
import express from "express";
import { conversationsRouter } from "./routes/conversations";
import { healthRouter } from "./routes/health";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", healthRouter);
app.use("/api/v1", conversationsRouter);

app.use((_req, res) => {
	res.status(404).json({
		error: "not_found",
		message: "Resource not found"
	});
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
	console.error(err);
	res.status(500).json({
		error: "internal_error",
		message: "Unexpected server error"
	});
});

export { app };
