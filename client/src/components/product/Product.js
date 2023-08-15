import React from 'react'
import dummyImg from '../../assets/Product2.jpg';
import './Product.scss'
import { useNavigate } from 'react-router';

function Product({product}) {
  const navigate = useNavigate();
  // console.log('product',product);
  return (
    <div className='Product' onClick={()=> navigate(`/products/${product.attributes.key}`)}>
    <div className="product-container">
        <div className="product-img">
            <div className="img-container">
                <img src={product?.attributes.image?.data.attributes.url} alt={product?.attributes.image.data.attributes.url} id='img' />
            </div>
        </div>
        <div className="product-info">
            <p className="title">
            {product?.attributes.title}
            </p>
            <p className="price">₹ {product?.attributes.Price}</p>
           
        </div>
    </div>
    </div>
  )
}

export default Product