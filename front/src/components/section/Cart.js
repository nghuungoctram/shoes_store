import React, { Component } from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';
import '../css/Cart.css'


class Cart extends Component{

  static contextType = DataContext;

  componentDidMount(){
    this.context.getTotal();
  }


  render(){
    const {cart,  reduction, increase, removeProduct, total, removeAllProduct} = this.context;
    // console.log(this.context);
    if(cart.length === 0){
      return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }else{
      return(
        <>
        {
          cart.map(item =>(
              <div className='details' key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="box">
                      <div className="row">
                        <h2>{item.name}</h2>
                        <span>${item.price * item.count}</span>
                      </div> 
                      <div className="amount">
                        <button className="count" onClick={()=> reduction(item.id)}> - </button>
                        <span>{item.count}</span>
                        <button className="count" onClick={()=> increase(item.id)}> + </button>
                      </div>
                  </div>
                  <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
              </div>
          ))
        }
        <div className="total">
          <Link to="/payment" onClick={() => removeAllProduct()}>Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </>
      )
    }
    }
    
}

export default Cart;