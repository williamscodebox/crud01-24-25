import pool from "../config/db.js"

export const getAllUsersServivce = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};
export const getUserByIdService = async () => {};
export const createUserService = async () => {};
export const updateUserService = async () => {};
export const deleteUserService = async () => {};