const {User} = require('../../models/user');
const supertest = require('supertest');

describe('auth middleware', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach(async () => {
        await Genre.remove({});
        server.close();
    });

    let token;
    const exec = async () => {
        await request(server)
            .post('/api/genres')
            .set('x-auth-token', token)
            .send({ name: 'genre1' });
    };

    beforeEach(() => {
        token = new User().generateAuthToken();
    });

    it('should return 401 if no token is provided', async () => {
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('should return 400 if token is invalid', async () => {
        token = 'a';
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('should return 200 if token is invalid', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });
});