import React from 'react'

export const User = ({user}) => {
 console.log("user",user);
    return (
    <div>
        <h1>User Comp</h1>
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            {user.map(user=>
                (
                    <tbody>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tbody>
                ))}

        </table>
    </div>
  )
}
