import express from 'express';
import dotenv from 'dotenv';
import musrtache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// Configura as variáveis de ambiente
dotenv.config();

// Cria uma instância do servidor Express
const server = express();

// Configura o servidor para usar Mustache como mecanismo de template
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', musrtache());

// Configura o servidor para servir arquivos estáticos da pasta "public"
server.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
server.use(mainRoutes);

server.use((req, res) => {
  res.send("Ops! Página não encontrada.");
})

// Inicia o servidor na porta definida no arquivo .env
server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
