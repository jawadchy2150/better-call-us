import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller,price, stock}= props.product;
    return (
        <div className="product">
            <div>
                <img src={img}></img>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock</p>
                <button 
                class = "btn-addCart" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart 
                </button>
            </div>
        </div>
    );
};

export default Product;