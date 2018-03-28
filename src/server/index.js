import http from 'http';
import express from 'express';
import path from 'path';
import App from './App';

const app = express();
const DEV = process.env.NODE_ENV === 'development';
const staticDir = DEV ? 'build' : 'static';
const port = '1337';

app.use('/static', express.static(path.join(process.cwd(), staticDir)));
app.use(App);
app.listen(port);

console.log('Server running at http://192.168.1.8:' + port);
