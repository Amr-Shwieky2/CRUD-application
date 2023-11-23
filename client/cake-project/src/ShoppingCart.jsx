import React, {useState} from 'react';
import './cart.css'
const ShoppingCart = () => {
    const [cart,setCart] = useState([])
    const [page,setPage] = useState('products')
    const [products] = useState([
        {
            name:'AA Battery',
            cost:'$4.99',
            img: "https://www.beaconinternational.co.uk/wp-content/uploads/2021/05/AA-Duracell-Battery-Pack-4.png",
        },
        {
            name:'Blanket',
            cost:'$30.90',
            img:'https://www.spotlightstores.com/medias/BP80597617-charcoal.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzMzY5MnxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDc4LzE0OTQ3NzUwNTEwNjIyL0JQODA1OTc2MTctY2hhcmNvYWwuanBnX1NQT1RXRl9wcm9kdWN0SGVyb3w1Mzc5ZmZhNDZkMjMxOTU1NTEwZWNiYzM3ZWE0YWY4MTJmYTM5ODA4NjJhNDg5NGE0MDYyZmI1ZjZhNGIwYzJk',
        },
        {
            name:'Blanket',
            cost:'$30.90',
            img:'https://www.spotlightstores.com/medias/BP80597617-charcoal.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzMzY5MnxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDc4LzE0OTQ3NzUwNTEwNjIyL0JQODA1OTc2MTctY2hhcmNvYWwuanBnX1NQT1RXRl9wcm9kdWN0SGVyb3w1Mzc5ZmZhNDZkMjMxOTU1NTEwZWNiYzM3ZWE0YWY4MTJmYTM5ODA4NjJhNDg5NGE0MDYyZmI1ZjZhNGIwYzJk',
        },
        {
            name:'Blanket',
            cost:'$30.90',
            img:'https://www.spotlightstores.com/medias/BP80597617-charcoal.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzMzY5MnxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDc4LzE0OTQ3NzUwNTEwNjIyL0JQODA1OTc2MTctY2hhcmNvYWwuanBnX1NQT1RXRl9wcm9kdWN0SGVyb3w1Mzc5ZmZhNDZkMjMxOTU1NTEwZWNiYzM3ZWE0YWY4MTJmYTM5ODA4NjJhNDg5NGE0MDYyZmI1ZjZhNGIwYzJk',
        },
    ]);
    const addToCart = (product) => {
     setCart([...cart,product]);
    };

    const renderProducts = () =>{
        <>
        <h1>products</h1>
        <div className='products'>
        {products.map((product, idx) => (
            <div className='product' key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.img} alt={product.name} />
            <button onClick={() => addToCart(product)}>
                add To Cart
                </button>
        </div>
        ))};
        </div>
      </>  
    }
    return (
       <>
       <div className='cart'>
        <header className='bouto'>
            <button className='buton'>Go to Cart ({cart.length})</button>
        </header>
        {page === 'products' && renderProducts()}
        <>
        <h1>products</h1>
        <div className='products'>
        {products.map((product, idx) => (
            <div className='product' key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.img} alt={product.name} />
            <button onClick={() => addToCart(product)}>
                add To Cart
                </button>
        </div>
        ))};
        </div>
      </>  
     </div>
    </>
    );
}

export default ShoppingCart;
