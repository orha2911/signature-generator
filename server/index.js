import express from 'express';
import nunjucks from 'nunjucks';
import cors from 'cors';
import { generateSignatures } from './signatureController.js';

const app = express();
const port = 3030;

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.use(cors());
app.use(express.json());
app.post('/generate-signatures', generateSignatures);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
