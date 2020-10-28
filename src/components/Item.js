import React from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addCart } from '../actions/index'

function Item(props) {
    let history = useHistory()
    const {id} = useParams()
    const item = props.items.find(item=>item.id === Number(id))

    const clickHandler = (e, item) => {
        e.preventDefault()
        props.addCart(item)
    }
    
    
    const goBackHandler = (e) => {
        e.preventDefault()
        history.push('/items')
    }
    return (
        <div className="item-details">
                <div>
                    {item.name}
                </div>
                <div>
                    ${item.price.toFixed(2)}
                </div>
                <div>
                    <img src = {item.imageUrl} />
                </div>
                <div>
                    {item.description}
                </div>
                <div>
                    {item.shipping}
                </div>
                <button onClick={(e)=> {clickHandler(e,item)}}>Add to Cart</button>
                <button onClick={goBackHandler}>Back to Shopping</button>

        </div>
    )
}

function mapStateToProps(state){
    return {
        items : state.items
    }
}

export default connect(mapStateToProps, {addCart})(Item)
