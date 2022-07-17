import { Pool } from 'pg'


export const pool=new Pool({
    host:'database-1.c4rxyhbfc2px.us-east-1.rds.amazonaws.com',
    user:'postgres',
    password:'91015269',
    database:'bdcomandantes',
    port:5432,
    ssl:{rejectUnauthorized:false}
});