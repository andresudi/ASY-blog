const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('user', () => {
    it('GET /users to show all users', (done) => {
        chai.request('http://localhost:3000')
        .get('/users')
        .end((err, res) => {
            console.log(res.body.data[0])
            expect(res.body.data[0]).to.have.property('username')
            expect(res.body.data[0]).to.have.property('email')
            done()
        })
    })

    it('should get login succesfully and get token', (done) => {
        chai.request('http://localhost:3000')
        .post('/users/login')
        .send({
            email: 'rexxar@mail.com',
            password: '123'
        })
        .end((err, res) => {
            expect(res).to.have.status(200)
            done()
        })
    })

    it('should return email is invalid', (done) => {
        chai.request('http://localhost:3000')
        .post('/users/login')
        .send({
            email: '',
            password: ''
        })
        .end((err, res) => {
            console.log(res.body)
            expect(res).to.have.status(400)
            done()
        })
    })
})

describe('article', () => {
    it('GET /article to show all article', (done) => {
        chai.request('http://localhost:3000')
        .get('/articles')
        .end((err, res) => {
            console.log(res.body)
            expect(res.body.data).to.have.status(200)
            expect(res.body.data).to.be.a('object')
            expect(res.body.data.title).to.be.a('string')
            expect(res.body.data.description).to.be.a('string')
            done()
        })
    })

    it('POST /article to new create article and should return object data types', (done) => {
        chai.request('http://localhost:3000')
        .post('/articles')
        .send({
            title: 'one piece',
            description: 'best manga ever'
        })
        .end((err, res) => {
            // console.log(res.body)
            expect(res.body.data).to.be.null
            expect(res.body.data).to.have.status(200)
            expect(res.body.data).to.have.property('title')
            expect(res.body.data).to.have.property('description')
            done()
        })
    })

    it('PUT /article to update a specific article', (done) => {
        chai.request('http://localhost:3000')
        .put(`/articles/${req.params.id}`)
        send({
            title: 'test',
            description: 'hehehehe'
        })
        .end((err, res) => {
            // console.log(res)
            expect(res.body.data).to.be.null
            expect(res.body.data).to.have.status(200)
            expect(res.body.data).to.have.header('token')
            done()
        })
    })

    it('DELETE /article to a specific article', (done) => {
        chai.request('http://localhost:3000')
        .delete(`articles/${req.params.id}`)
        .end((err, res) => {
            expect(res.body.data).to.be.null
            expect(res.body.data).to.have.status(200)
            expect(res.body.data).to.have.header('token')
            done()
        })
    })
})