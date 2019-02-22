import chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../api/index';
import MEAL from '../api/utils/dummyMealData';

const { expect, use } = chai;

use(chaiHTTP);
const mealData = {
  name: 'Gari',
  price: 400,
  description: 'Test description',
  size: 'Test size',
  type: 'Test type',
};
describe('API V1 Routes', () => {
  const rootUrl = '/api/v1';

  describe('Meal Endpoints', () => {
    const baseUrl = `${rootUrl}/meals`;
    it(`GET ${rootUrl}/meals -- should get all meals records`, (done) => {
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
    it(`GET ${rootUrl}/meals/:id -- should get a specific meal records`, (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/1`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(200);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(200);
          expect(res.body.data).to.not.equal(0);
          const mealAns = MEAL.meals[0];
          expect(mealAns).to.eql(res.body.data);
          expect(res.body.data.id).to.eq(1);
        });
      done();
    });
    it(`GET ${rootUrl}/meals/:null -- should fail to get a meal`, (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/null`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(404);
          expect(res.body.status).to.eq(404);
          expect(res.body.error).to.eql('That record does not exist');
        });
      done();
    });
    it(`POST ${rootUrl}/meals -- should add a meal`, (done) => {
      chai
        .request(app)
        .post(`${baseUrl}`)
        .send(mealData)
        .end((err, res) => {
          expect(res.statusCode).to.eq(201);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq('success');
          expect(res.body.message).to.contain('meal created');
          const mealAns = MEAL.meals[MEAL.meals.length - 1];
          expect(mealAns.description).to.eql(res.body.data.description);
          expect(mealAns.price).to.eql(res.body.data.price);
          expect(mealAns.type).to.eql(res.body.data.type);
          expect(mealAns.size).to.eql(res.body.data.size);
          expect(mealAns.price).to.eql(res.body.data.price);
        });
      done();
    });
    it(`POST ${rootUrl}/meals -- should fail to add a meal`, (done) => {
      chai
        .request(app)
        .post(`${baseUrl}`)
        .send({})
        .end((err, res) => {
          expect(res.statusCode).to.eq(400);
          expect(res.body.error).to.eql('Faild all fileds are required');
        });
      done();
    });
    it(`PUT ${rootUrl}/meals/:id -- should update a meal record`, (done) => {
      chai
        .request(app)
        .put(`${baseUrl}/1`)
        .send(mealData)
        .end((err, res) => {
          expect(res.statusCode).to.eq(201);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(201);
          expect(res.body.data).to.not.equal(0);
          const mealAns = MEAL.meals[0];
          expect(mealAns).to.eql(res.body.data);
        });
      done();
    });
    it(`PUT ${rootUrl}/meals/:null -- should fail to update a meal`, (done) => {
      chai
        .request(app)
        .put(`${baseUrl}/null`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(404);
          expect(res.body.status).to.eq(404);
          expect(res.body.error).to.eql('That record does not exist');
        });
      done();
    });
    it(`DELETE ${rootUrl}/meals/:id -- should delete a meal record`, (done) => {
      chai
        .request(app)
        .delete(`${baseUrl}/1`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(200);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(200);
          expect(res.body.data).to.not.equal(0);
          expect(res.body.data[0].id).to.eq(1);
        });
      done();
    });
    it(`DELETE ${rootUrl}/meals/:null -- should fail to delete a meal`, (done) => {
      chai
        .request(app)
        .put(`${baseUrl}/null`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(404);
          expect(res.body.status).to.eq(404);
          expect(res.body.error).to.eql('That record does not exist');
        });
      done();
    });
  });
});
