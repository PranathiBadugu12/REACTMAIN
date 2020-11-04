var assert = require('assert')
var http = require('http')
var calc = require('../JS/calc.js')
var server = require('../server.js')
var should = require('chai').should();

foo='bar'
beverages={tea:['chai','matcha','mocha']};
// describe('HTTP SERVER TEST',() => {
//     before(function(){
//         server.listen(5555)
//     })
//     describe('/',() => {
//         it('',() => {
//             http.get('http://localhost:5555',function(response){
//                 assert.equal(response.statusCode,200)
//             })
//         })
//         it('',() => {
//             http.get('http://localhost:5555',function(response){
//                 var body = ''
//                 response.on('data',function(d){
//                     body += d
//                     console.log(body)
//                 })
//                 response.on('end', function(){
//                     assert.equal(body,'Hello')
//                 })
//             })
//         })
//     })
//     after(function(){
//         server.close()
//     })
// })

// before(() => {
//     console.log("Before ...")
// })
// after(() => {
//     console.log("after ...")
// })
// beforeEach(() => {
//     console.log("BeforeEach ...")
// })
// afterEach(() => {
//     console.log("AfterEach ...")
// })
describe('Array Execution', () => {
    it('#indexOf()', () => {
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.length(3);
        beverages.should.have.property('tea').with.length(3);    
    });
    });
