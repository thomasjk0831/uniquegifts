import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import  axios  from 'axios'
import { getItems } from '../actions/index'

function Items(props) {
    useEffect ( ()=> {
        axios
        .get("http://localhost:5000/api/items")
        .then(res=>{
            // console.log("items", res.data.items)
            props.getItems(res.data.items)
        })
        .catch(err=> console.log(err))
    }, [])

    let history = useHistory()

    const clickHandler = (id) => {
        history.push(`/items/${id}`)
    }
    return (
        <div className = "list-items">
            {
                props.items.map(item=> {
                    return <div className = "item" onClick ={() => {clickHandler(item.id)}}>
                              <div>
                                {item.name}
                              </div>
                              <div>
                                <img src ={item.imageUrl} />
                              </div>
                              
                            </div>
                })
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        items : state.items
    }
}

export default connect(mapStateToProps, {getItems})(Items)
