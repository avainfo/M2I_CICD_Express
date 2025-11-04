describe('Check endpoint /', () => {
    it('should return 200', async () => {
        let req = await fetch("http://localhost:3000/");
        expect(req.status).toEqual(200);
    });

    it('should return data', async () => {
        let req = await fetch("http://localhost:3000/");
        let body = await req.text();
        expect(body).toContain("Welcome to Express");
    });
});

describe('Check endpoint /users', () => {
    it('should return 200', async () => {
        let req = await fetch("http://localhost:3000/users");
        expect(req.status).toEqual(200);
    });
    it('should return user data', async () => {
        let req = await fetch("http://localhost:3000/users");
        let body = await req.json();
        expect(await body).toEqual({"name": "Antonin", "age": 21});
    });
});
