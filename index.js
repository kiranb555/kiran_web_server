import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv'; 

dotenv.config();

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000;

console.log('========= index file =========')
MongoClient.connect(
    process.env.PORTFOLIO_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.log(err.stack, "failed to establish mongo connection");
    process.exit(1)
}).then(async client => {
    app.listen(port, (port) => {
        console.log(` Listening on port ${port}`)
    })
})

console.log("==============================")