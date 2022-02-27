const app = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});