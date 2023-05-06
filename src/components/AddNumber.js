import React,{ Component } from "react";
import store from '../store'
export default class AddNumber extends Component{
    state={size:1}
    render(){
      return(
        <div>
          <h1>Add number</h1>
          <input type="button" value="+" onClick={function(){
            // this.props.onClick(this.state.size) //부모로 보내는 과정
            store.dispatch({type:'Increment',size:this.state.size})
          }.bind(this)}/>
          <input type="text" value={this.state.size} onChange={function(e){
            this.setState({size:Number(e.target.value)})
          }.bind(this)}/>
        </div>
      )
    }
  }