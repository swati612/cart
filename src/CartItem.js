import React from 'react';

class CartItem extends React.Component{
   

    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(()=>{
    //             resolve("done")
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         this.setState({ quantity: this.state.quantity + 1});
    //         this.setState({ quantity: this.state.quantity + 1});
    //         this.setState({ quantity: this.state.quantity + 1});
    //         console.log("state", this.state)
    //     })
    // }
    increaseQuantity = () => {
        //this.state.quantity += 1;
        console.log(this.state)
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
        const {quantity} = this.state
        if (quantity===0){
            return;
        }
        this.setState({
           quantity: this.state.quantity - 1
         })
    }
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