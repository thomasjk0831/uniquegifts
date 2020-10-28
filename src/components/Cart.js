
import React from 'react'
import { connect } from 'react-redux';
import { removeCart } from '../actions/index';

function Cart(props) {

    const clickHandler = (e, item) => {
        e.preventDefault();
        props.removeCart(item)
    }

    return (
        <div className="cart">
            <div>
                Your total is : ${props.total.toFixed(2)<=0? "zero": props.total.toFixed(2)}
            </div>
            {
                props.cart.map(item=>{
                    return   <div className = "cart-item">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        ${item.price}
                                    </div>
                                    <div>
                                        <img src = {item.imageUrl}/>
                                    </div>
                                    <div>
                                       quantity:  {item.quantity}
                                    </div>
                                    <button onClick={(e)=> {clickHandler(e,item)}}>Remove Item</button>
                                </div>
                })
            }
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart : state.cart,
        total : state.total
    }
}

export default connect(mapStateToProps, {removeCart})(Cart)
