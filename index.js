const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('custom-env').env(true)
const cors = require("cors");
const helmet = require("helmet");
const apiRouter = express.Router();
const { mongoDb } = require("./config/env.dev");
const AnswerSchema = require("./models/answer");



/**
 * Middlewares
 */
app.use(helmet());

app.use(cors());
app.use(express.json());

app.post('/answer', async (req,res)=>{
    const body = new AnswerSchema(req.body);
    try {
        const data = await body.save();
        res.json({ message: 'Answer sent to Akshay Successfully' });

    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
})

mongoose.connect(
	mongoDb,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	},
	() => {
		console.log("connected to DB");
	}
);

/**********************************************************************
 * ******************** END : Mongoose connection *******************
 ***********************************************************************/

//port
app.listen(process.env.PORT || 3000, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});