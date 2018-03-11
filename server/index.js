import express from 'express';
import bodyParser from 'body-parser';

import { sequelize } from '../database/models';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let PORT = process.env.PORT || 8080;

app.get('/hello', (req, res) => {
  sequelize
    .query('SELECT * FROM books', { raw: true })
    .then(projects => {
      return res.json({ message: 'Hello World', projects });
    })
})

app.listen(PORT, function () {
  console.log('Listening in PORT: ' + PORT);
});