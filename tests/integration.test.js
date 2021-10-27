const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../app');
chai.use(chaiHttp);

describe('Integration Test', () => {
  it('Gets todo from endpoint',  function(done) {
    this.timeout(10000);
    chai
      .request(app)
      .get('/todo')
      .end((err, res) => {
          
        assert.equal(res.statusCode, 200);
        assert.isNotNull(res.data);
        assert.isArray(res.body);
        done();
      });
  });
  it('Posts todo from endpoint',  function(done) {
    this.timeout(10000);
    chai
      .request(app)
      .post('/todo')
      .send({name:"I have to do work"})
      .end((err, res) => {
          
        assert.equal(res.statusCode, 200);
        assert.isNotNull(res.text);
        assert.isString(res.text);
        done();
      });
  });
});