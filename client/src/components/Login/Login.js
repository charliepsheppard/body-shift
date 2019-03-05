import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value    
        })
            
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let url = '/session';

            let body = {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password
            }

            await axios.post(url, body)

        } catch (err) {console.log(err)}
        

    }

    render() {
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <input type='text' name='name' value={this.state.name} />
                <input type='text' name='email' value={this.state.email} />
                <input type='password' name='password' value={this.state.password} />
                <input type='submit' value='Log In' />
            </form>
        )    
    }
    
}

export default Login