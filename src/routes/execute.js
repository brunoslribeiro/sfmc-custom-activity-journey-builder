const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  
  try {
    // Verificar e decodificar o JWT para autenticar a requisição
    console.log(process.env.JWT_SECRET);    
    const decoded = jwt.verify(req.body.toString('utf8'), process.env.JWT_SECRET, { algorithm: 'HS256' });

    // Exibir os dados decodificados
    console.log('Dados decodificados do JWT:');
    console.log(decoded);

    res.status(200).send({ status: 'ok' });
  } catch (err) {
    console.error('JWT verification failed', err);
    res.status(401).send({ error: 'Unauthorized' });
  }
});

module.exports = router;
