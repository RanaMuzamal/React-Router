import React from 'react'
import { useParams } from 'react-router'

export const ProductDetails = () => {
    const {productId}=useParams();
    return (
        <div>
            Product Details of  {productId}
        </div>
    )
}
