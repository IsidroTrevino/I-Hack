import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM User');
    res.send({
        id_user: result[0].id_user
    });
}



