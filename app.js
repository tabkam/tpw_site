const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan')

const app = express();



// setup static and middleware
app.use(cors());
app.use(express.static('./public'));
app.use(morgan('tiny'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })

app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})