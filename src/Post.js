import axios from "axios";
import React,{Component} from "react";
import { Link } from "react-router-dom";
import './Style.css'
export class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      pieces:'',
      price:'',
      saleType:'',
      ageRestrictions:'',
    };
  }
  handleIdChange = (event) => {
    this.setState({id: event.target.value});
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }
  handlePiecesChange = (event) => {
    this.setState({pieces: event.target.value});
  }
  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
  }
  handleSaleTypeChange = (event) => {
    this.setState({saleType: event.target.value});
  }
  handleAgeRestrictionsChange = (event) => {
    this.setState({ageRestrictions: event.target.value});
  }  
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id:this.state.id,
      name:this.state.name,
      pieces:this.state.pieces,
      price:this.state.price,
      saleType:this.state.saleType,
      ageRestrictions:this.state.ageRestrictions,
    };
    axios.post('http://127.0.0.1:8080/addCracker',data)
  };
  render() {

    return (
      <div className="background">
            <Link to="Home"><div className="back1"></div></Link>
        <div className="box8">
            <form onSubmit={this.handleSubmit}>
                <h1 className="t3">Enter Cracker details</h1>
                <input type="text" placeholder="ID" className="details" value={this.state.id} onChange={this.handleIdChange}></input><br></br><br></br>
                <input type="text" placeholder="Name" className="details" value={this.state.name} onChange={this.handleNameChange}></input><br></br><br></br>
                <input type="text" placeholder="Pieces" className="details" value={this.state.pieces} onChange={this.handlePiecesChange}></input><br></br><br></br>
                <input type="text" placeholder="Price" className="details" value={this.state.price} onChange={this.handlePriceChange}></input><br></br><br></br>
                <input type="text" placeholder="Sale type" className="details" value={this.state.SaleType} onChange={this.handleSaleTypeChange}></input><br></br><br></br>
                <input type="text" placeholder="Age restrictions" className="details" value={this.state.AgeRestrictions} onChange={this.handleAgeRestrictionsChange}></input><br></br><br></br>
                <input type="submit" className="b2" value="Add details"></input>
            </form>
        </div>
      </div>
    )
  }
}
export default Post