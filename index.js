const { request, response } = require('express')
const express = require('express')

var morgan = require('morgan')
morgan.token('body-content', function (req, res) { 
  if (req.method === "POST") {
    return JSON.stringify(req.body)
  }
  return
})

const app = express()
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body-content'))
app.use(express.static('build'))


let persons = [
  { id: '1', name: 'Arto Hellas', number: '040-123456' },
  { id: '2', name: 'Ada Lovelace', number: '39-44-5323523' },
  { id: '3', name: 'Dan Abramov', number: '12-43-234345' },
  { id: '4', name: 'Mary Poppendieck', number: '39-23-6423122' }
]


app.get('/info', (request, response) => {
  const now = new Date()
  response.send(`<p>Phonebook has info for ${persons.length} people</p> \n ${now}`)
})

app.get('/api/persons', (request, response) =>
  response.json(persons)
)

app.get('/api/persons/:id', (request, response) =>{
  const id = request.params.id
  const person = persons.find( person => person.id === id)
  if(person){
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const newPerson = {...request.body}

  if(!newPerson.name){
    return response.status(400).json({
      error: 'Name is missing'
    })
  }
  if(!newPerson.number){
    return response.status(400).json({
      error: 'Number is missing'
    })
  }
  if(persons.map(person => person.name).includes(newPerson.name)){
    return response.status(400).json({
      error: 'Name must be unique'
    })
  }

  const newId = Math.floor(Math.random() * 100000)
  newPerson.id = newId.toString()
  
  persons = persons.concat(newPerson)

  response.json(newPerson)
})

app.delete('/api/persons/:id', (request,response) => {
  const id = request.params.id
  persons = persons.filter( person => person.id !== id)

  response.status(204).end()
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})