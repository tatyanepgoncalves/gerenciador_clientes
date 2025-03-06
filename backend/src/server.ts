import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";


const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

app.register(cors, {
  origin: true,
  methods: ["GET", "POST", "DELETE"],
});
app.register(routes);

app.listen({ port: 3333 }, () => {
  console.log("🚀 A API está funcionando na porta 3333!");
});
