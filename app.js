const express = require("express")
const app = express()
const port = 3000


app.get ("/api/posts", (req, res) => {
    res.send ("Hello World")
})

app.listen(port, () => {
    console.log(`La mia porta è http://localhost:${port}/api/posts`)
})
