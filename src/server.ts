import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers
app.use((req: Request, res: Response) => {
  res.status(404).send();
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send();
});

// Start server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Started at http://localhost:${PORT}`);
});
