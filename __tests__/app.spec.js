const app = require('../server')
const supertest = require('supertest')
const { expect } = require('@jest/globals')
const request = supertest(app)

//Tests top level ('/') routes

describe('Site Index Routes', () => {
    test('responds to /', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
        expect(res.statusCode).toBe(200)
    }),

    test('responds to /api-docs', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
        expect(res.statusCode).toBe(200)
    })
})