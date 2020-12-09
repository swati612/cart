
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    
    this.state={
     products:[],
     loading: true
    }
    this.db =firebase.firestore()
    
}
componentDidMount(){
  // firebase
  // .firestore()
  // .collection('products')
  // .get().then((snapshot) =>{
  //   console.log(snapshot)
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data())
  //   })
  //   const products =  snapshot.docs.map((doc)=>{
  //     const data =doc.data();
  //     data['id'] = doc.id;
  //    return data
  //   })
  //   this.setState({
  //     // products:products
  //     products,
  //     loading:false
  // })
  // })

  this.db
   .collection('products')
   //.where('price','>',999)
  //.where('title','==',mug)
  //.orderBy('price')
  .orderBy('price','desc')
   .onSnapshot((snapshot)=>{
    console.log(snapshot)
  
   snapshot.docs.map((doc)=>{
       console.log(doc.data())
      });
      const products =  snapshot.docs.map((doc)=>{
        const data =doc.data();
         data['id'] = doc.id;
          return data
       })
       this.setState({
        // products:products
        products,
        loading:false
    })
})
}
handlerIncreaseQuantity = (product) =>{
    console.log("increase",product)
    const {products} = this.state
    const index = products.indexOf(product)
   // products[index].quantity +=1;
   // this.setState({
    //    // products:products
   //     products
  //  })
  const docRef= this.db.collection('products').doc(products[index].id)
  docRef.update({
    quantity:products[index].quantity +1
  })
  .then(()=>{
    console.log("updated successfully")
  })
  .catch((error)=>{
    console.log("error",error )
  })
  
  
}
handlerDecreaseQuantity =(product) =>{
    console.log("decrease",product)
    const {products} = this.state
    const index = products.indexOf(product)
    if (products[index].quantity ===0){
     return (console.log("0"))
    }
    // products[index].quantity -=1;
    // this.setState({
    //     // products:products
    //     products
    // })
    const docRef= this.db.collection('products').doc(products[index].id)
    docRef.update({
      quantity:products[index].quantity -1
    })
    .then(()=>{
      console.log("updated successfully")
    })
    .catch((error)=>{
      console.log("error",error )
    })
}
handlerDeleteProduct = (id)=>{
    const {products} = this.state
    // const items = products.filter((item)=>
    // item.id !== id
    // )
    // this.setState({
    //     products:items,
    // })
    const docRef= this.db.collection('products').doc(id)
    docRef
    .delete()
    .then(()=>{
      console.log("deleted successfully")
    })
    .catch((error)=>{
      console.log("error",error )
    })
}

getCartCount =()=>{
        const {products} = this.state
        let count =0;

        products.forEach((product) => {
          count +=product.quantity
        });
        return count;
      }

      getCartTotal = () => {
        const { products } = this.state;
    
        let cartTotal = 0;
    
        products.map((product) => {
          if(product.quantity>0){
          cartTotal = cartTotal + product.quantity * product.price
        }
        return ''
      })
      
    
        return cartTotal;
      }
      addProduct = () =>{ 
        this.db
         .collection('products')
         .add({
           img:'https://img.tatacliq.com/images/i5/437Wx649H/MP000000005696744_437Wx649H_20191006021007.jpeg',
           price:900,
           quantity:3,
           title:"washing machine"
         })
         .then((docRef)=>{
                 console.log('product has been added', docRef);
         }).catch((error)=>{
                 console.log("error",error)
         })

      }
  render(){

    const {products,loading} = this.state
      return (
        <div className="App">
        <Navbar count ={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:15, fontSize:18}}>Add a Prodcut</button>
        <Cart 
        products={products}
        onIncreaseQuantity= {this.handlerIncreaseQuantity}
        ondecreaseQuantity= {this.handlerDecreaseQuantity}
        onDeleteProduct = {this.handlerDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: Rs {this.getCartTotal()} </div>

        </div>
      );
    }
}
export default App;
