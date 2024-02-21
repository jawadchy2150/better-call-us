import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    // const totalPrice= cart.reduce((total,prd) => total+prd.price,0);
    let productPrice= 0;
    for(let i=0; i<cart.length; i++)
    {
        const product = cart[i];
        productPrice= productPrice + product.price
    }

    let shipping = 12.99;
    if(productPrice>500) {
        shipping= 0;
    }
    else {
        shipping = 10;
    }

    let totlaAmount= productPrice + shipping;

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items order: {cart.length}</p>
            <p>Total Price: {productPrice}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Amount: {totlaAmount}</p>
            
        </div>
    );
};

export default Cart;