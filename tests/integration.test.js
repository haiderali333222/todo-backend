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
          console.log(res.body);
        assert.equal(res.statusCode, 200);
        assert.isNotNull(res.data);
        assert.isArray(res.body);
        done();
      });
  });
});