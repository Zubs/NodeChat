const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const errorHandlers = require('./middlewares/errorHandlers');
const logger = require('./middlewares/log');

app.set('view engine', 'ejs');
app.use(logger.logger);
app.use(express.static('public'));

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);

app.use(errorHandlers.errorHandler);
app.use(errorHandlers.notFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
