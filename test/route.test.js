const app = require("../app.js");
const request = require("supertest");

describe('Check endpoint /', () => {
    it('should return 200', (done) => {
        request(app)
            .get("/")
            .expect(200, done);
    });
});

describe('Check endpoint /users', () => {
    it('should return 200', (done) => {
        request(app)
            .get("/users")
            .expect(200, done);
    });

    it('should return user data', async () => {
        const res = await request(app)
            .get("/users");
        expect(res.body).toEqual({"name": "Antonin", "age": 21});
    });
});
