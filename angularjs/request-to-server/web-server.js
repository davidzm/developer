var express = require("express"),
  app     = express(),
  port    = parseInt(process.env.PORT, 10) || 8080;

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});


app.post('/execute', function(req, res) {
    console.log("INICIO EXECUTE");
    console.log(req);
    var recipe = {};
    recipe.id = 1
    recipe.title = 'chicken';

    if(req.body.message.field2 =="1"){
        // Simulate delay in server
        setTimeout(function() {
            res.send(recipe);
        }, 5000);
    }else{

        throw new Error('whoops');
        //res.status(500);
        //res.render("500.jade", {});
    }

});

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');
