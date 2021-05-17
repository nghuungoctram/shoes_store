const knex = require("knex");
const querry = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "19121999",
        database: "shoes"
    },
    pool: { max: 100, min: 0 }
}, (e) => {
    console.log(e);
})
module.exports = querry;