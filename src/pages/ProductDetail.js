import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();

    return (
        <>
            <div>Product details page</div>
            <div>{params.productid}</div>
        </>
    )
}

export default ProductDetail
