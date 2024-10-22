import React, { useContext } from 'react';
import './productdisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import Product from '../../Pages/Product';

const ProductDisplay = (props) => {
    const {addToCart}=useContext(ShopContext)
    const {product}=props
  return (
    <div className='productDisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
<div className='productdisplay-img'>
<img src={product.image} alt='' className='productdisplay-main-img'/>
</div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>                
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
</div>
<div className='productdisplay-right-prices'>
    <div className='productdisplay-right-old-price'>
        ${product.oldPrice}
</div>
<div className='productdisplay-right-new-price'>
        ${product.newPrice}
</div>

</div>
<div className='productdisplay-right-description'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae animi tempore, ut libero corporis dignissimos fugit similique, optio esse facilis dolor. Totam repellat provident similique deleniti aliquam pariatur maiores!
</div>
<div className='productdisplay-right-size'>
    <h1>select size</h1>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
</div>
<button onClick={()=>addToCart(product.id)}>Add To Cart</button>
<p className='productdisplay-right-category'><span>Category:</span>Women,T-shirt,Crop</p>
<p className='productdisplay-right-category'><span>Category:</span>Modern Latest</p>

</div>
        
      
    </div>
  )
}

export default ProductDisplay