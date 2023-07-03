import mysql from 'promise-mysql';

import Keys from './Keys';

const pool = mysql.createPool(Keys.database);
pool. getConnection().then(connection =>{
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;