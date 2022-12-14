import React, { Component } from "react";

import Data from "./Data";
import Cookies from "js-cookie";



// code adapted from the 'React Authentication' treehouse course
const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();
    this.cookie = Cookies.get("authenticatedUser");
    this.state = {
      authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null,
    };
  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: { // Add the 'actions' property and object
        signIn: this.signIn,
        signOut: this.signOut,
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
// Handles user sign in authentication 
// additionally updates cookie with auth user info.
  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    const plainText = password;

    if (user !== null) {
      user.password = plainText;
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
     
      Cookies.set("authenticatedUser", JSON.stringify(user), { expires: 1 });
    }
    return user;
  };
// handle user sign out 
// removes the cookies when auth user signs out. 
  signOut = () => {
    this.setState({ authenticatedUser: null });
    Cookies.remove("authenticatedUser");
  };
}

export const Consumer = Context.Consumer;



export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}