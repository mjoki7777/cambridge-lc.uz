import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import '../assets/admin.css';

class Admin extends Component {
    
  state = {
    applications: [],
    loggedIn: true
  };

  componentDidMount() {
   this.Get();
   if(!localStorage.getItem('authenticate')) this.setState({loggedIn: false})
  }

  Get  = async () => {
    try {
      let applications = await axios.get('/api/Get')
      this.setState({ applications: applications.data })
    } catch (err) {
    throw err
    } 
  };

  Delete = (_id) => {
      axios.post('/api/Delete', {
      _id
    }).then((res) => {
    console.log(res)
    this.Get();
    }).catch(err => {console.log(err)});
  };

  logout = () => { 
    localStorage.removeItem('authenticate')
    this.setState({loggedIn: false})
  }
  render() {    

  const { applications } = this.state;

        if (!this.state.loggedIn) {
            return <Redirect to='/login' />
            }

    return (
      <div>

        <br></br>
        <div className="applications">ЗАЯВКИ</div>

        {applications.map((dat, index) => (
        <div className="applicationsinfo" key={index}>
        <div> {dat.time} </div>
        <hr className="hr"></hr>
        <div> {dat.name} </div>
        <hr className="hr"></hr>
        <div> {dat.level} </div>
        <hr className="hr"></hr>
        <div> {dat.phone} </div>
        <button className="applicationsbutton" onClick={() => this.Delete(dat._id)}> ПРИНЯТО </button>

        </div>
        ))}

      </div>
    )
  }
}

export default Admin;