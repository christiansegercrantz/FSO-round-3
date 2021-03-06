const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@full-stack-open.jn7xg.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', contactSchema)

if(process.argv.length > 3){
    new Person({
        name: process.argv[3],
        number: process.argv[4],
    })
        .save().then(result => {
            console.log('added', result.name, result.number, 'to phonebook')
            mongoose.connection.close()
        })}

else if(process.argv.length === 3){
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}