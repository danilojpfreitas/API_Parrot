import { AppDataSource } from "./data-source";
import express from "express";
import routes from "./infra/routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  });
}).catch((error) => console.log(error))
