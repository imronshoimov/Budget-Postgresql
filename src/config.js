const PORT = process.env.PORT || 4000

const pgConfig = {
    connectionString: "postgres://cktyurdh:n4_IHg2i-jqmcCBqRznHDOMpmazf-NJq@batyr.db.elephantsql.com/cktyurdh"
}

module.exports = { PORT, pgConfig }