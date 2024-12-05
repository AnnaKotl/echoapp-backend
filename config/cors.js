const corsOptions = () => ({
  origin: [
    'http://localhost:5173', // local 
    'https://echoapp-front.onrender.com', // Render
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
});

module.exports = corsOptions;


// origin -> 'https://www.echocode.app'
// local -> 'http://localhost:5173'
// Render -> 'https://echoapp-backend.onrender.com'
