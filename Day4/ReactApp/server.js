var http = require('http')
var server = http.createServer(function(req,res){
    res.writeHead(200)
    res.end("Hello")
});
exports.listen = function(port){
    console.log('listening' + port)
    server.listen(port)
}
exports.close=function(){
    server.close();
}