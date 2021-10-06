import { useState } from "react";
import { getUsers} from "../../api";
import { User } from "../../types";

const Users = () => {
    const [users, setUsers] = useState<User[] | undefined>([]);

    const obetnerUsuarios = async () => {
        const response = await getUsers();
        setUsers(response);
    };
    
    if (!users) {
        obetnerUsuarios();
    }

    console.log(users);

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Pasword</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(user => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.pass}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export { Users };