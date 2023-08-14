const express = require('express');
const app = express();
const path = require('path')

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.use(express.static(path.join(__dirname,'StoryAi/build')))

app.get('/', function(a,r){
  r.sendFile(path.join(__dirname,'StoryAi/build/index.html'))
  r.send('StoryAi')
})

app.get('*', function(a,r){
  r.sendFile(path.join(__dirname,'StoryAi/build/index.html'))
})
