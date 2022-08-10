const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});

let hasLogged = false;

// eslint-disable-next-line no-console
pool.on('connect', ({ database, host, port }) => {
  if (!hasLogged) {
    // eslint-disable-next-line no-console
    console.log('🐘 Postgres connected to', `${database} on ${host}:${port}`);
    hasLogged = true;
  }
});

module.exports = pool;
