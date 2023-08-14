const express = require('express');
const app = express();
const path = require('path')

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.use(express.static(path.join(__dirname,'stroyai/build')))

app.get('/story', function(a,r){
  r.sendFile(path.join(__dirname,'storyai/build/index.html'))
})
