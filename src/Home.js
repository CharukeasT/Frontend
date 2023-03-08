import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
class Home extends Component {
  render() {
    return (
      <div>
        <div className='background'>
          <div className='box1'><Link to="Signin"><div className="back2"></div></Link></div>
          <div className='box2'>
            <h1 className='t1'>Aadhi Crackerz</h1>
            <a><Link to="Post">
            <button className='b1'>
              <div className='img1'></div>
              <h1 className='t2'>Add details</h1>
            </button></Link></a><br></br><br></br>
            <a><Link to="Get">
            <button className='b1'>
              <div className='img2'></div>
              <h1 className='t2'>Get details</h1>
            </button></Link></a><br></br><br></br>
            <a><Link to="Put">
            <button className='b1'>
              <div className='img3'></div>
              <h1 className='t2'>Update details</h1>
            </button></Link></a><br></br><br></br>
            <a><Link to="Delete">
            <button className='b1'>
              <div className='img4'></div>
              <h1 className='t2'>Delete details</h1>
            </button></Link></a><br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Home