import express from 'express'
import wizards from './data/wizards.js'

const app = express()

app.use(express.json())

app.get('/wizards', (req, res) => {
    res.status(200).json(wizards)
})
app.get('/wizards/:id', (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= wizards.length){
        return res.status(404).json({message: 'Wizard not found'})
    }
    res.status(200).json(wizards[id])
})
app.post('/wizards', (req, res) => {})
app.put('/wizards/:id', (req, res) => {})
app.delete('/wizards/:id', (req, res) => {})

app.listen(3000, ()=>{
    console.log(`Server runs`)
})