var chai = require('chai');
var chaiHttp = require('chai-http');
var mocha = require('mocha');
var expect = chai.expect;
var server = require(__dirname + '/../server');
chai.use(chaiHttp);

describe('Users REST API', function() {
  it('should respond to GET /users with list of users', function(done) {
    chai.request('localhost:3000')
      .get('/api/users')
      .end(function(err, res) {
        expect(err).to.eql(null)
        expect(res.status).to.eql(200)
        expect(res).to.be.json;
      done();
      });
  });
  it('should respond to POST /users by storing and returning a user', function(done) {
    chai.request('localhost:3000')
      .post('/api/users')
      .send({name: 'Testy McTester',
             files: ['file1']
            })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should respond to PUT /users/:user by updating and returning a user', function(done) {
    chai.request('localhost:3000')
      .put('/api/users/:user')
      .send({name: 'Carl'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should respond to DELETE /users/:user by deleting the user', function(done) {
    chai.request('localhost:3000')
      .del('/api/users/:user')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
});

describe('Files REST API', function() {
  it('should respond to GET /users/:user/files with list of users files', function(done) {
    chai.request('localhost:3000')
      .get('/api/users/:user/files')
      .end(function(err, res) {
        expect(err).to.eql(null)
        expect(res.status).to.eql(200)
        expect(res).to.be.json;
      done();
      });
  });
  it('should respond to POST /users/:user/files by storing and returning a file to a user', function(done) {
    chai.request('localhost:3000')
      .post('/api/users/:user/files')
      .send({filename: 'testing.txt',
             contents: 'lots of text about testing'
            })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should respond to PUT /users/:user/files/:file by updating and returning a specific file', function(done) {
    chai.request('localhost:3000')
      .put('/api/users/:user/files/:file')
      .send({contents: 'boom overwritten'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
  it('should respond to DELETE /users/:user/files/:file by deleting a specific file', function(done) {
    chai.request('localhost:3000')
      .del('/api/users/:user/files/:file')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);;
        expect(res).to.be.json;
        done();
      });
  });
});