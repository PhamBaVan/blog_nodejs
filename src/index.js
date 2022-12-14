// import express from 'express';
// import { engine } from 'express-handlebars';

// const app = express();

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.listen(3000);

import express from 'express';
import {engine} from 'express-handlebars';

const app = express()
const port = 3000

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views');
app.get('/', (req, res) => {
    res.render('home',
    {
        helpers:{
            message() {return 'Message';},
            noti() {return 'Notify';}
        }
    })
    
})

app.get('/news',(req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

