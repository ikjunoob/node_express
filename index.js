const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let users = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "홍경복" }
];

app.post('/users', (req, res) => {
    try {
        const newUser = req.body

        users.push({
            id: Date.now(),
            ...newUser
        })
        res.status(201).json({ message: "사용자 추가 완료", users })

    } catch (error) {
        console.error("사용자 추가 중 오류 발생", error)
        res.status(500).json({ message: "서버 오류 발생" })
    }
})

app.get('/users', (req, res) => {
    try {
        res.json(users)
        res.status(200).json({ message: '성공적으로 가져왔습니다.' })
    } catch (error) {
        console.error('사용자 조회 중 오류 발생', error)
        res.status(500).json({ massage: '서버 내부 오류 발생' })
    }
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Server is running')
})