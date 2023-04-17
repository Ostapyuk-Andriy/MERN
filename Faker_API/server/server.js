const express = require("express")

const app = express()

const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const { faker } = require('@faker-js/faker');



const createUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.internet.userName(),
        lastName: faker.internet.userName(),
        number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFakeUser;
};

console.log(createUser())


const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        }
    return newFakeCompany;
};

console.log(createCompany())

app.get("/api/users/new", (req,res) => {
    let user = createUser();
    res.json({
        results: user
    })
})

app.get("/api/companies/new", (req, res) => {
    let company = createCompany();
    res.json({ 
        results: company 
    });
});

app.get("/api/user/company", (req, res) => {
    let user = createUser();
    let company = createCompany();
    res.json({
    user: user,
    company: company,
    });
});




app.listen(port, () => console.log(`Welcome to the Death Star! you are on bridge port: ${port}`))
