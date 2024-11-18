const corsOptions = () => ({
  origin: ['https://echoapp-backend.onrender.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
});

module.exports = corsOptions;

// origin -> 'https://www.echocode.app'
// local -> 'http://localhost:5173'
// Render -> 'https://echoapp-backend.onrender.com'
