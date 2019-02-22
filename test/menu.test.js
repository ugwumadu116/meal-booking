import chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../api/index';
// import MENU from '../api/utils/dummyMenuData';

const { expect, use } = chai;

use(chaiHTTP);
const menuData = {
  mealId: 2,
};
describe('API V1 Routes', () => {
  const rootUrl = '/api/v1';

  describe('Menu Endpoints', () => {
    const baseUrl = `${rootUrl}/menu`;
    it(`GET ${rootUrl}/menu -- should get all menu records`, (done) => {
      chai
        .request(app)
        .get(baseUrl)
        .end((err, res) => {
          expect(res.statusCode).to.eq(200);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(200);
          expect(res.body.data).to.not.equal(0);
        });
      done();
    });
    it(`POST ${rootUrl}/menu -- should add a meal to the menu`, (done) => {
      chai
        .request(app)
        .post(`${baseUrl}`)
        .send(menuData)
        .end((err, res) => {
          expect(res.statusCode).to.eq(201);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(201);
          expect(res.body.message).to.contain('menu created');
        });
      done();
    });
    it(`POST ${rootUrl}/menu -- should fail to add a meal`, (done) => {
      chai
        .request(app)
        .post(`${baseUrl}`)
        .send({})
        .end((err, res) => {
          expect(res.statusCode).to.eq(400);
          expect(res.body.error).to.eql('meal with id undefined does not exist please add meal');
        });
      done();
    });
  });
});
