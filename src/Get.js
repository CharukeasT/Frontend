import { Link } from "react-router-dom";
import './Style.css'
import React, { Component } from 'react'
import axios from "axios";

export class Get extends Component {
  state = {
    data:[]
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8080/getCracker').then(reponse=>{
      this.setState({data:reponse.data});
    }).catch(error =>{
      console.log(error);
    });
  }
  render() {
    return (
        <div className="background1">
        <div className="box3">
            <Link to="Home"><div className="back1"></div></Link>
        </div>
        <div className="box4">
            <form>
                <h1 className="t3">Cracker Details</h1>
                <center><table border={1}>
      <tbody>
        <tr>
          <th className="w1">ID</th>
          <th>Name</th>
          <th>Pieces</th>
          <th>Price</th>
          <th>SaleType</th>
          <th>AgeRestrictions</th>
        </tr>
        {this.state.data.map(user=>(
          <tr key = {user.id}>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.pieces}</th>
            <th>{user.price}</th>
            <th>{user.saleType}</th>
            <th>{user.ageRestrictions}</th>
          </tr>
        ))}
      </tbody>
    </table></center>
         </form>
      </div>
      </div>
    );
  }
}

export default Get