const express = require('express');
//we write this this way because we don't have 
//the access to the ES6 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//path lets us build the path to our directory 


if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000; 

//what this does is basically 
//any requests coming in  in bodyParser is converted into json 
//so that we can use it 

app.use(bodyParser.json());
//this makes sure if the url we are getting in 
//do not contain things like space and symbols 
app.use(bodyParser.urlencoded({extended: true}));

//cross origin request 
//by using this, either we can enable or block 
//the requests from our local host 3000 to port 5000
app.use(cors());


//whenever heroku receives the request,
//it determines, based on the request url, what to do 
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  //get, post , update , delete
  app.get('*', function(req, res){
    res.sendFile(path.json(__dirname, 'client/build', 'index.html'))

  }) 
}


app.listen(port, error => {
  if(error) throw error;
  console.log('Server running on port ' + port); 
})

//we declare the type of the root we need 
//this receives any requests made for /payment route
//we are going to use the amount and token 
app.post('/payment',(req, res) => {
  const body ={ 
    source: req.body.token.id,
    amount: req.body.amount, 
    currency: 'usd'
  };
  

  //req is holding all the info related to request 
  //res is how we respont the request 

  //we want to inform client cide app how successful the request was 
  stripe.charges.create(body, (stripeErr, stripeRes) => {
      if(stripeErr){
        res.status(500).send({error : stripeErr});
      }else{
        res.status(200).send({success: stripeRes});
      }
  });
 
})