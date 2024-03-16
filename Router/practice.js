const express = require('express');
const router = express.Router();
const Joi = require('joi');


const practice = [
    {id: 1, name: 'dinesh'},
    {id: 2, name: 'ram'},
    {id: 3, name: 'shyam'},
    {id: 4, name: 'kumar'},
];

//  Get method for retriving data
// for query parameters we use req.query eg: (http://localhost:8080/api/practice/1/?name)

router.get('/', (req, res) =>
{
    res.send(practice);
});

router.get('/:id', (req, res) =>
{
    let prac = practice.find(d => d.id === parseInt(req.params.id));
    if (!prac) return res.status(404).send('ID not found!'); 
    res.send(prac);  
});

//  Post method for uploading or sending data
router.post('/', (req, res) => {
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    const { error } = validatepractice(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let prac = {
        id: practice.length + 1,
        name: req.body.name
    };
    practice.push(prac);
    res.send(prac);

});

// Put method for updating data 

router.put('/:id', (req, res) => {
    let prac = practice.find(d => d.id === parseInt(req.params.id));// for query parameters we use req.query eg: (http://localhost:8080/api/practice/1/?name)
    if (!prac) return res.status(404).send('ID not found!');

        // const result = validatepractice(req.body);
    const { error } = validatepractice(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    prac.name = req.body.name;
    res.send(prac);
});


// Delete method to delete data

router.delete('/:id', (req, res) => {
    let prac = practice.find(d => d.id === parseInt(req.params.id));
    if (!prac) return res.status(404).send('ID not found!');

    const index = practice.indexOf(prac);
    practice.splice(index, 1);

    res.send(prac);
});

function validatepractice(prac) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(prac, schema);
}

module.exports = router;