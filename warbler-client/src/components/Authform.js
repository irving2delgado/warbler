import React, { Component } from "react";

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {      /* set default state of AuthForm */
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        };
    }

// This allows text to be entered into input arrow function so binding in constructor isnt nessecary
    handleChange = (e) => {   
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.prevenDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            console.log("Logged in!");
        })
    };

    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp } = this.props; 
        return(
            <div>
                <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <h2>{heading}</h2>
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            value={email}
                            type="text"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                        />
                        {signUp && (                /* {(if this part is true) && (this part will execute)}  */
                                <div>
                                    <label htmlFor="username">Username:</label>
                        <input
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={username}
                            type="text"
                        />
                        <label htmlFor="image-url">Image URL:</label>
                        <input
                            className="form-control"
                            id="image-url"
                            name="profileImageUrl"
                            onChange={this.handleChange}
                            type="text"
                            value={profileImageUrl}
                        />
                                </div>
                        )}
                        <button 
                        type="submit" 
                        className="btn btn-primary btn-block btn-lg">
                            {buttonText}
                        </button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}