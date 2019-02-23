import chai from 'chai';
import chaiHTTP from 'chai-http';
import app from '../api/index';
import ORDER from '../api/utils/dummyOrderData';

const { expect, use } = chai;

use(chaiHTTP);
const orderData = {
  userId: 2,
  price: 400,
  mealQuantity: 2,
  addressId: 'block 6 abesan estate ipaja lagos',
  status: 'delevered',
  mealId: 1,
};
describe('API V1 Routes', () => {
  const rootUrl = '/api/v1';

  describe('Orders Endpoints', () => {
    const baseUrl = `${rootUrl}/orders`;
    it(`GET ${rootUrl}/orders -- should get all orders records`, (done) => {
      chai
        .request(app)
        .get(baseUrl)
        .end((err, res) => {
          expect(res.statusCode).to.eq(200);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq('success');
          expect(res.body.data).to.not.equal(0);
        });
      done();
    });
    it(`GET ${rootUrl}/orders/:id -- should get a specific order records`, (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/1`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(200);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq('success');
          expect(res.body.data).to.not.equal(0);
          const orderAns = ORDER.orders[0];
          expect(orderAns).to.eql(res.body.data);
          expect(res.body.data.id).to.eq(1);
        });
      done();
    });
    it(`GET ${rootUrl}/orders/:null -- should fail to get an order`, (done) => {
      chai
        .request(app)
        .get(`${baseUrl}/null`)
        .end((err, res) => {
          expect(res.statusCode).to.eq(404);
          expect(res.body.status).to.eq('error');
          expect(res.body.error).to.eql('order does not exist');
        });
      done();
    });
    it(`POST ${rootUrl}/orders -- should add an order`, (done) => {
      chai
        .request(app)
        .post(`${baseUrl}`)
        .send(orderData)
        .end((err, res) => {
          expect(res.statusCode).to.eq(201);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(201);
          const order = ORDER.orders[ORDER.orders.length - 1];
          expect(order.price).to.eql(res.body.data.price);
          expect(order.userId).to.eql(res.body.data.userId);
          expect(order.mealQuantity).to.eql(res.body.data.mealQuantity);
          expect(order.addressId).to.eql(res.body.data.addressId);
        });
      done();
    });
    it(`POST ${rootUrl}/orders -- should fail to add an order`, (done) => {
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
    it(`PUT ${rootUrl}/orders/:id -- should update an order record`, (done) => {
      chai
        .request(app)
        .put(`${baseUrl}/1`)
        .send(orderData)
        .end((err, res) => {
          expect(res.statusCode).to.eq(201);
          expect(res.headers['content-type']).to.contain('application/json');
          expect(res.body.status).to.eq(201);
          expect(res.body.data).to.not.equal(0);
        });
      done();
    });
    it(`PUT ${rootUrl}/orders/:1 -- should fail to update an order`, (done) => {
      chai
        .request(app)
        .put(`${baseUrl}/null`)
        .send({})
        .end((err, res) => {
          expect(res.statusCode).to.eq(400);
          expect(res.body.status).to.eq(400);
          expect(res.body.error).to.eql('Faild all fileds are required');
        });
      done();
    });
  });
});
