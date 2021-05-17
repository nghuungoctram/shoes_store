import React, { Component } from 'react';

export const DataContext = React.createContext();


export class DataProvider extends Component{
        constructor(props){
            super(props)
            this.state = {
                products: [],
                cart: [],
                total: 0

            }
        }
    // state = {
    //     products: [
    //         {
    //             "_id": "1",
    //             "name": "Nike Air Max 270",
    //             "image":'https://thegioigiaythethao.vn/images/attachment/341Giay-Nike-W-Air-Max-270-Pastel-Easter-CJ0568-100-copy.jpg',
    //             "price": 139.99,
    //             "count": 1
    //         },
    //         {
    //             "_id": "2",
    //             "name": "Nike Air Jordan",
    //             "image":'https://fbshop.vn/wp-content/uploads/2020/08/Gi%C3%A0y-Nike-Air-Jordan-1-Low-Shattered-Backboard.gif',
    //             "price": 150.99,
    //             "count": 1
    //         },
    //         {
    //             "_id": "3",
    //             "name": "Nike Air Max 270",
    //             "image":'https://thegioigiaythethao.vn/images/attachment/341Giay-Nike-W-Air-Max-270-Pastel-Easter-CJ0568-100-copy.jpg',
    //             "price": 139.99,
    //             "count": 1
    //         },
    //         {
    //             "_id": "4",
    //             "name": "Nike Air Jordan",
    //             "image":'https://fbshop.vn/wp-content/uploads/2020/08/Gi%C3%A0y-Nike-Air-Jordan-1-Low-Shattered-Backboard.gif',
    //             "price": 150.99,
    //             "count": 1
    //         },
    //         {
    //             "_id": "5",
    //             "name": "Nike Air Max 270",
    //             "image":'https://thegioigiaythethao.vn/images/attachment/341Giay-Nike-W-Air-Max-270-Pastel-Easter-CJ0568-100-copy.jpg',
    //             "price": 139.99,
    //             "count": 1
    //         },
    //         {
    //             "_id": "6",
    //             "name": "Nike Air Jordan",
    //             "image":'https://fbshop.vn/wp-content/uploads/2020/08/Gi%C3%A0y-Nike-Air-Jordan-1-Low-Shattered-Backboard.gif',
    //             "price": 150.99,
    //             "count": 1
    //         }
            
    //     ],
    //     cart: [],
    //     total: 0
    // };
       
    getProduct = () => {
        fetch('Home')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json.data
                })
            })
    }
    addCart = (id) => {
        console.log(66666666,id)
        
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== id
        })
        // console.log(check,66665555)
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
           this.setState({cart:[...cart,...data]})
        //    this.getTotal();
        //    this.getProduct();
        }else{
            alert("The product has been added to cart! ")
        }
        
    };
    
    reduction = id =>{
       const { cart } = this.state;
       cart.forEach(item =>{
           if(item.id === id){
            //    console.log(4567989,item.id)
                item.count === 1 ? item.count = 1 : item.count -=1
           }
       })
       this.setState({cart: cart})
       this.getTotal();
    }; 

    increase = id =>{
        const { cart } = this.state;
       cart.forEach(item =>{
           if(item.id === id){
                item.count +=1
           }
       })
       this.setState({cart: cart})
       this.getTotal();
    };

    removeProduct = id =>{
      const { cart } = this.state;
        // const id1=id;
       // eslint-disable-next-line
      if(confirm("You want remove cart...?")){
    //    let count=0;
        cart.forEach((item, index) =>{
            
            if(item.id === id ){
                // count+=1;
                cart.splice(index, 1 )

            }
            // console.log(55, item)
        })
       
        this.setState({cart: cart})
        this.getTotal();
      }
    };

    removeAllProduct = () =>{
        const { cart } = this.state;
        this.setState({cart: []})
    }

    getTotal = () =>{
        const {cart} =this.state;
        const res = cart.reduce((prev, item) => {
           
            return prev + (item.price * item.count);
        },33)
        this.setState({total: res})
        
    }

    componentDidUpdate(){
        // this.getProduct()
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        
        const dataCart =JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart})
        }
        const dataTotal =JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal})
        }
        this.getProduct();
    }


  render(){
      const {products, cart, total} = this.state;
      const {addCart, reduction, increase, removeProduct , getTotal, removeAllProduct} = this;

    return(
      <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, getTotal, total, removeAllProduct}}>
          {this.props.children}
      </DataContext.Provider>
    )
  }
}