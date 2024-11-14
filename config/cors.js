const corsOptions = () => ({
  origin: ['http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
});

module.exports = corsOptions;

// origin ->>>>>>> 'https://www.echocode.app'