import app from './app';

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${PORT}`);
  /* eslint-enable no-console */
});
