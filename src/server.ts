import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

app.listen(3333, () => {
  console.log('🚀Server started on port 3333!...');
});
