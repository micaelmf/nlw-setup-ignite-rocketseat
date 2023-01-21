import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify();

/**
 * ATENÇAO: Isso libera para qualquer sistema/endereço acessar o backend.
 * É possível passar configurações como parâmetro para restringir
 * que endereços podem acessar o backend
 */
app.register(cors, {
    origin: true
}); 
app.register(appRoutes)

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then((url) => {
    console.log(`HTTP Server running on ${url}`);
})


