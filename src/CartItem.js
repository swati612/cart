import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            quantity:1,
            img:''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity = () => {
        //this.state.quantity += 1;
        //setState form 1
        // this.setState({
        //     quantity: this.state.quantity + 1
        // })
        //setState form 2 :-- use this when previous state is required
        this.setState((preState)=>{
            return{
                quantity: preState.quantity + 1
            }
        })
    }
    decreaseQuantity=()=>{
        this.setState({
           quantity: this.state.quantity - 1
         })
    }
    render(){
        const {price,quantity} = this.state
        return(
            <div className="cart-item">
              <div className="left-block">
              <img style={styles.image}/>
              </div>
              <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color :'#777'}}>Rs {price}</div>
                    <div style={{color :'#777'}}>{quantity}</div>
                    <div className="cart-item-actions">
                     {/* kjhsdkhksd */}
                            <img alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828926.svg" 
                            onClick={this.increaseQuantity}
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