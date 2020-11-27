import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        
        this.state={
         products:[
            {
            price:599,
            title:'Watch',
            quantity:1,
            img:'',
            id:1
            },
            {
            price:1999,
            title:'Phone',
            quantity:10,
            img:'',
            id:2
            },
            {
            price:40999,
            title:'Laptop',
            quantity:16,
            img:'',
            id:3
            },
            {
            price:999,
            title:'Tab',
            quantity:8,
            img:'',
            id:4
            }
         ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this)
        //this.testing()
    }
    handlerIncreaseQuantity = (product) =>{
        console.log("incease",product)
        const {products} = this.state
        const index = products.indexOf(product)
        products[index].quantity +=1;
        this.setState({
            // products:products
            products
        })
    }
    render(){
         const { products } =this.state;
        return ( 
            <div className="cart">
             {products.map((product)=>{
             return (
                 <CartItem 
                      product={product}
                      key={product.id} 
                      onIncreaseQuantity= {this.handlerIncreaseQuantity}
                 /> 
                 )
             }) }
            </div>
        )
    }
        
}


export default Cart;