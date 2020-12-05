
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { removeCart, emptyCart } from '../actions/index';
import axios from '../data/axios'
import StripeCheckout from 'react-stripe-checkout'
import { useToasts } from 'react-toast-notifications'

function Cart(props) {
    const { addToast } = useToasts()
    const [checkOut, setCheckOut] = useState(false)
    const [paymentReceived, setPaymentReceived] = useState(false)

    const clickHandler = (e, item) => {
        e.preventDefault();
        props.removeCart(item)
    }

    function checkOutHandler() {
        setCheckOut(true)
    }

    function handleToken(token) {
        // console.log(props.cart)
        const productsPurchased = props.cart
        const amount = props.total
        axios.post('/checkout', { token, productsPurchased, amount })
            .then(res => {
                console.log(res)
                if (res.data.status === 'success') {
                    addToast('Success! Payment received!', { appearance: 'success' })
                    setPaymentReceived(true)
                    props.emptyCart()

                } else {
                    addToast('Error! Something went wrong!', { appearance: 'error' })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>

            <div className="cart-container">
                {
                    paymentReceived ? <div className="cart-total">Thanks for your payment!</div> : null
                }
                <div className="cart-total">
                    {props.total.toFixed(2) <= 0 ? "Your cart is empty" : <div>Your total is : ${props.total.toFixed(2)} </div>}
                </div>
                {
                    !props.isLoggedIn && props.cart.length && !checkOut ? <div className="checkout" onClick={checkOutHandler}>Checkout as guest</div> : null
                }

                {
                    (props.isLoggedIn && props.cart.length) || (checkOut && props.cart.length) ?
                        <StripeCheckout
                            stripeKey="pk_test_51HuIytKYmwTS6U2AYtRxdf7oXi2OJc1AhfzyrPsNxgq7tTJ4uxe6eiPht5PW5LDK9pRGXJnln9H3wm65xSsvuuKn00zXsYzkIS"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={props.total * 100} /> : null
                    // <div className="checkout" onClick={checkOutHandler}>Checkout as guest</div>
                }

                <div className="cart">

                    {
                        props.cart.map(item => {
                            return <div className="cart-item">
                                <div className="cart-item-name">
                                    {item.name}
                                </div>
                                <div>
                                    ${item.price}
                                </div>
                                <div>
                                    <img src={item.imageUrl} />
                                </div>
                                <div>
                                    quantity:  {item.quantity}
                                </div>
                                <div className="cart-button" onClick={(e) => { clickHandler(e, item) }}>Remove Item</div>
                            </div>
                        })
                    }
                </div>

            </div>

        </>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        total: state.total,
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, { removeCart, emptyCart })(Cart)
