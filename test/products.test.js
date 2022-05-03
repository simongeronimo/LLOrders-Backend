import { expect, server, BASE_URL } from './setup';
describe('Products', () => {
  it('get products page', done => {
    server
      .get(`${BASE_URL}/products`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.products).to.be.instanceOf(Array);
        res.body.products.forEach(m => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('info');
          expect(m).to.have.property('quantity');
        });
        done();
      });
  });
  it('posts messages', done => {
    const data = { name: 'some name', info: 'new info', quantity: 1 };
    server
      .post(`${BASE_URL}/products`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.products).to.be.instanceOf(Array);
        res.body.products.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('info', data.info);
          expect(m).to.have.property('quantity', data.quantity);
        });
        done();
      });
  });
});