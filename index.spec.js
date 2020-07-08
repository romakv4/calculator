const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

describe('API', () => {
    it('Sum request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "+"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(3);
            });
    });

    it('Sub request', () => {
        return request
            .post('/two-args')
            .send(
                {
                    firstArg: 1,
                    secondArg: 2,
                    operation: "-"
                }
            )
            .expect('Content-type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBe(-1);
            });
    })
});