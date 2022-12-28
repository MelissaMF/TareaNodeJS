const users = [
    {id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "sincere@april.biz",
    adress:{
        street:"Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo:{
            lat:"-37.3159",
            lng:"81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hidlegard.org",
    company:{
        nameCompany:"Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs:"harness real-time e-markets"
    }
    }
]

const getAll = () => users;

const getById = id => {return users.find(user => user.id == id)};

module.exports ={
    getAll,
    getById
}