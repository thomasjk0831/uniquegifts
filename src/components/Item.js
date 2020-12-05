import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addCart } from '../actions/index'
import axios from '../data/axios'

function Item(props) {
    const [item, setItem] = useState({})
    const { id } = useParams()
    let history = useHistory()

    useEffect(() => {
        axios.get(`/api/items/${id}`)
            .then(res => {
                setItem(res.data)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    // const item = props.items.find(item => item.id === Number(id))


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
            <div className="item-details-left">
                <div className="item-details-left-name">
                    {item.name}
                </div>
                <div>
                    ${item.price}
                </div>
                <div>
                    <img src={item.imageUrl} />
                </div>
                <div className="item-buttons">

                    <div className="item-button" onClick={(e) => { clickHandler(e, item) }}>Add to Cart</div>
                    <div className="item-button" onClick={goBackHandler}>Back to Shopping</div>
                </div>

            </div>
            <div className="item-details-right">
                <div>
                    {item.description}
                </div>
                <div className="item-details-shipping">
                    {item.shipping}
                </div>
            </div>


        </div>
    )
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { addCart })(Item)
