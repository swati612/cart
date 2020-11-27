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
        console.log("increase",product)
        const {products} = this.state
        const index = products.indexOf(product)
        products[index].quantity +=1;
        this.setState({
            // products:products
            products
        })
    }
    handlerDecreaseQuantity =(product) =>{
        console.log("decrease",product)
        const {products} = this.state
        const index = products.indexOf(product)
        if (products[index].quantity ===0){
         return (console.log("0"))
        }
        products[index].quantity -=1;
        this.setState({
            // products:products
            products
        })
    }
    handlerDeleteProduct = (id)=>{
        const {products} = this.state
        const items = products.filter((item)=>
        item.id !== id
        )
        this.setState({
            products:items
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
                      ondecreaseQuantity= {this.handlerDecreaseQuantity}
                      onDeleteProduct = {this.handlerDeleteProduct}
                 /> 
                 )
             }) }
            </div>
        )
    }
        
}


export default Cart;