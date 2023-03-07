import React, { Component } from "react";
import axios from "axios"

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        /* 
                state= {
                  a:10,
                  b:20,
                  c:30
                }

                ...state yapınca 
                ilk stateyi değiştirmeden 2. bir state kopyalar ve değişiklikler bu kopyalanan state üzerinden gerçekleşir
                */
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        //...state ile önceki bilgileri arraya alır ardından action.payload ile gönderilen veriyi de array'e ekler
        users: [...state.users,action.payload]
      };

    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  //async-await yapısı veri dönene kadar beklememizi sağlar
  componentDidMount = async () => { 
     const response = await axios.get("http://localhost:3000/users")
     //response bir object olarak döner response.data ile verilerimizi çekebiliriz
     //console.log(response);
     this.setState({
      users: response.data
     })
   }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          {this.props.children}
        </UserContext.Provider>
      </div>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
