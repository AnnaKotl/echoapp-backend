const corsOptions = () => ({
  origin: ['https://www.echocode.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
});

module.exports = corsOptions;

// origin ->>>>>>> 'https://www.echocode.app'
// local -> 'http://localhost:5173'
