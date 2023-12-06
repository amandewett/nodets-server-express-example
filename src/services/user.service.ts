import connection from "../db/db";

export class UserService {
    constructor() { }

    createUser(userName: string, userEmail: string) {
        return new Promise(async (resolve: any) => {
            try {
                const query: string = `insert into users (name, email) values("${userName}","${userEmail}")`;
                const [result] = await connection.query(query);
                resolve({
                    status: true,
                    message: `User created successfully`
                });
            }
            catch (e: any) {
                console.log(e);
                resolve({
                    status: false,
                    message: e.message
                });
            }
        });
    }

    updateUser(userId: number, userName: string, userEmail: string) {
        return new Promise(async (resolve: any) => {
            try {
                const query: string = `update users set name = "${userName}", email = "${userEmail}" where id = ${userId}`;
                const [result]: any = await connection.query(query);
                console.log(result);
                if (result.affectedRows == 1) {
                    resolve({
                        status: true,
                        message: `User updated successfully`
                    });
                }
                else {
                    resolve({
                        status: true,
                        message: `User doesn't exists`
                    });
                }
            }
            catch (e: any) {
                console.log(e);
                resolve({
                    status: false,
                    message: e.message
                });
            }
        });
    }

    getAllUsers() {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const query: string = `select * from users`;
                const [result] = await connection.query(query);
                resolve({
                    status: true,
                    result: result
                });
            }
            catch (e) {
                console.log(e);
                reject({
                    status: false,
                    error: e
                });
            }
        });
    }

    getUserDetails(userId: number) {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const query: string = `select * from users where id = ${userId}`;
                const [result]: any = await connection.query(query);
                if (result.length != 0) {
                    resolve({
                        status: true,
                        result: result[0]
                    });
                }
                else {
                    resolve({
                        status: false,
                        message: `User doesn't exists`
                    });
                }
            }
            catch (e) {
                console.log(e);
                reject({
                    status: false,
                    error: e
                });
            }
        });
    }

    deleteUser(userId: number) {
        return new Promise(async (resolve: any, reject: any) => {
            try {
                const query: string = `delete from users where id = ${userId}`;
                const [result]: any = await connection.query(query);
                if (result.affectedRows != 0) {
                    resolve({
                        status: true,
                        message: `User deleted successfully`
                    });
                }
                else {
                    resolve({
                        status: false,
                        message: `User doesn't exists`
                    });
                }
            }
            catch (e) {
                console.log(e);
                reject({
                    status: false,
                    error: e
                });
            }
        });
    }
}