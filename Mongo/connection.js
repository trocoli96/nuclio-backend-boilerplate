const mongoose = require('mongoose');


//Default mongoose connection
    const mongoDB = () => {
        if(process.env.NODE_ENV === 'production'){
            return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gjw9t.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        }
        if(process.env.NODE_ENV === 'development'){
            return process.env.MONGO_URL
        }
    }

//Mongo DB connect
mongoose.connect(mongoDB(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database Connected Successfully on " + process.env.NODE_ENV)
).catch(err => console.log(err));

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));