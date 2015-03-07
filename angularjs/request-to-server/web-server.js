var express = require("express"),
    mongoskin = require('mongoskin'),
    bodyParser = require('body-parser')
logger = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(express.static(__dirname + '/app'))

var db = mongoskin.db('mongodb://@localhost:27017/test', {safe:true})

app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName)
    return next()
});



app.post('/processpost', function(req, res) {
    console.log("INICIO EXECUTE");
    console.log(req);
    var recipe = {};
    recipe.id = 1
    recipe.title = 'chicken';

    if(req.body.field2 =="1"){
        // Simulate delay in server
        setTimeout(function() {
            res.send(recipe);
        }, 5000);
    }else{

        throw new Error('QUE PASO');
    }

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




////////////////////////////////////////////////////////

app.get('/collections/:collectionName', function(req, res, next) {
    req.collection.find({} ,{limit: 10, sort: {'_id': -1}}).toArray(function(e, results){
        if (e) return next(e)
        res.send(results)
    })
});

app.post('/collections/:collectionName', function(req, res, next) {
    req.collection.insert(req.body, {}, function(e, results){
        if (e) return next(e)
        res.send(results[0])
    })
});

app.post('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.updateById(req.params.id, {$set: req.body}, {safe: true, multi: false}, function(e, result){
        if (e) return next(e)
        res.send((result === 1) ? {msg:'success'} : {msg: 'error'})
    })
});

app.get('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.findById(req.params.id, function(e, result){
        if (e) return next(e)
        res.send(result)
    })
});



app.delete('/collections/:collectionName/:id', function(req, res, next) {
    req.collection.removeById(req.params.id, function(e, result){
        if (e) return next(e)
        res.send((result === 1)?{msg: 'success'} : {msg: 'error'})
    })
});
/////////////////

app.listen(8080, function(){
    console.log('Express server listening on port 8080')
})
