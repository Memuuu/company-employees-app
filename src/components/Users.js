import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {
    return (
      //User Consumer ile context.js'deki valueler bu componente sarmallanarak kuruluyor
      //users = value ile tüm value users değişkenine aktarılarak users'e ulaşılabiliyor
      <UserConsumer>
        {value => {
          const { users } = value;
          return (
            <div  className="items_wrap">
              {users.map(user => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    salary={user.salary}
                    department={user.department}
                  ></User>
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
