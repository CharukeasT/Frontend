import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
export class Delete extends Component {
  render() {
    return (
        <div className="background">
        <div className="box3">
            <Link to="Home"><div className="back1"></div></Link>
        </div>
        <div className="box8">
            <form>
                <h1 className="t3">Delete Cracker details</h1>
                <input type="text" placeholder="ID" className="details"></input><br></br><br></br>
                <input type="text" placeholder="Name" className="details"></input><br></br><br></br>
                <input type="text" placeholder="Pieces" className="details"></input><br></br><br></br>
                <input type="text" placeholder="Price" className="details"></input><br></br><br></br>
                <input type="text" placeholder="Sale type" className="details"></input><br></br><br></br>
                <input type="text" placeholder="Age restrictions" className="details"></input><br></br><br></br>
                <input type="submit" className="b2" value="Delete details"></input>
            </form>
        </div>
      </div>
    )
  }
}

export default Delete