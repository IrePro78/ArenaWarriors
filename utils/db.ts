import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'megak_arena',
    namedPlaceholders: true,
    decimalNumbers: true,
});
