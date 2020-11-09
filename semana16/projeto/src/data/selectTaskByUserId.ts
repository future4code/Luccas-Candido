import { connection } from "../index";

export const selectTaskByUserId = async (id: number): Promise<any> => {
  const result = await connection.raw(
    `
      SELECT tasks.*, users.nickname FROM TodoListTask AS tasks
      JOIN TodoListUser AS users
      WHERE creator_user_id = ${id};
      `
  );

  return result[0];
};
