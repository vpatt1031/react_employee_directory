import React, { Component } from 'react'
import Button from './components/Button'
import API from "./utils/API"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    }
  }

  //async function get request
  // async componentDidMount() {
  //   this.setState({ isLoading: true })
  //   const response = await fetch('https://randomuser.me/api/')
  
  //   if (response.ok) {
  //     const users = await response.json()
  //     this.setState({ users, isLoading: false })
  //   } else {
  //     this.setState({ isError: true, isLoading: false })
  //   }
  // }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    API.getUsers()
      .then(data => this.setState({users: data.data.results}))
      .then(res => console.log(this.state.users))
  }

  simpleBtn = () => {
    console.log("Hello")
  }
  // renderTableHeader = () => {
  //   return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  // }

  // renderTableRows = () => {
  //   return this.state.users.map(user => 
  //     (
  //       <tr key={user.id}>
  //         <td>{user.id}</td>
  //         <td>{user.name.first} {user.name.last}</td>
  //         <td>{user.login.username}</td>
  //         <td>{user.email}</td>
  //         <td>{`${user.location.street}, ${user.location.city}`}</td>
  //         <td>{user.phone}</td>
  //         <td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
  //       </tr>
  //     )
  //   )
  // }
  
  render () {
    const {users, isLoading, isError} = this.state

    if (isLoading){
      return <div>Loading...</div>
    }

    if(isError){
      return <div>Error...</div>
    }

    return users.length > 0
      ? (
        <>
        <h1>Employee Directory</h1>
        <Button nice={this.simpleBtn}/>
        <table>
          <thead>
            <tr>
              {/* <th>Gender</th> */}
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>User Login</th>
              <th>Age</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id.value}>
              {/* <td>{user.gender}</td> */}
              <td>{user.name.first} {user.name.last}</td>
              <td>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}`}</td>
              <td>{user.email}</td>
              <td>{user.login.username}</td>
              <td>{user.dob.age}</td>
              <td><img src={user.picture.thumbnail} alt={user.name.first}></img></td>
            </tr>
            ))}
          </tbody>
        </table>
        </>
      ) : (
        <div>
          No users.
      </div>
      )
    
  }
}

export default App;
