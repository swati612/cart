import React from 'react';

class CartItem extends React.Component{

    render(){
        console.log(this.props)
        const {price,quantity,title} = this.props.product
        return(
            <div className="cart-item">
              <div className="left-block">
              <img style={styles.image}/>
              </div>
              <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color :'#777'}}>Rs {price}</div>
                    <div style={{color :'#777'}}>{quantity}</div>
                    <div className="cart-item-actions">
                     {/* kjhsdkhksd */}
                            <img alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg" 
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                            />
                            <img alt="decrease"
                            className="action-icons"
                            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828906.svg"
                            onClick={this.decreaseQuantity}
                            />
                            <img alt="delete" 
                            className="action-icons"
                            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" />
                    </div>
               </div>
            </div>
            )
    }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}
export default CartItem;