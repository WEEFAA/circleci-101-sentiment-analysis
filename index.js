const express = require('express')
const Sentiment = require('sentiment')
// util
const { getWord } = require('./utils/getWord')

const PORT = process.env.PORT || 3000
// init 
const app = express()
const sentiment = new Sentiment()

// routes
app.get('/', (req,res) => {
    const { query: q } = req
    const word = getWord(q)
    res.json({
        word,
        analysisHref: encodeURI(`http://localhost:${PORT}/analysis?q=${word}`)
    })
})

app.get('/analysis', (req,res) => {
    const { query: { q } } = req 
    const targetWord = getWord(q)
    const sentiment_result = sentiment.analyze(targetWord)
    res.json(sentiment_result)
})



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))