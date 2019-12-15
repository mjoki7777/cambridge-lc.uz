import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'antd/dist/antd.css';
import '../assets/login.css';

class Login extends Component {
    
    state = {
        password:'',
        login:'',
        loggedIn: false,
        url: '/api/login'
      };
    
      componentDidMount() {
          if(localStorage.getItem('authenticate')) this.setState({loggedIn: true})
      }
       login = async () => {
           console.log(this.state.login);
           console.log(this.state.password);
            try {
            let resdata = await axios.post(this.state.url, {
                login: this.state.login,
                password: this.state.password
            })
            console.log(resdata)
            localStorage.setItem('authenticate', resdata.token)
            this.setState({loggedIn: true})
          } catch(err){
              alert('Вышла ошибочка')
            console.log(err)
          }
      }
    render() {    
        if (this.state.loggedIn) {
            return <Redirect to='/admin' />
            }
        return (
            <div className="main">

                <div className="admin"> Админка </div>
                <Input
                placeholder="Логин"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => {this.setState({login: e.target.value})}}
                />
                <Input.Password 
                placeholder="Пароль"
                onChange={(e) => {this.setState({password: e.target.value})}} 
                />
                <Button type="danger" className="forword" onClick={this.login}>Войти</Button>
     
            </div>
        )
    }
}

export default Login;