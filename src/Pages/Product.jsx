import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/Description/Description'
import RelatedComponents from '../components/Related Component/RelatedComponents'

const Product = () => {
  const {AllProduct}=useContext(ShopContext)
  const {productId}=useParams()
  const product=AllProduct.find((e)=>e.id===Number(productId))
  return (
    <div className='products'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedComponents/>
    </div>
  )
}

export default Product
