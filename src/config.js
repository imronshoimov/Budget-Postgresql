const PORT = process.env.PORT || 4000

const pgConfig = {
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '7889',
    database: 'money'
}

module.exports = { PORT, pgConfig }