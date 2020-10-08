import React, {Fragment} from 'react';


const ProductList = ({product, addCart}) => {

    return(
        <Fragment>
                    {
                        product && (
                            <div key={product._id} className="product__item">
                            <img src={product.image} className="product__image"/>
                            <div className="product__content">
                                <h3 className="product__title">{product.title}</h3>
                                <span className="product__price">{product.price} $</span>
                                <p className="product__description">{product.description}</p>
                                <button type="button" className="product__btn" onClick={() => addCart()}>Add cart</button>
                            </div>
                        </div>
                        )
                    }
                    {
                        !product && (
                            'No comic books'
                        )
                    }

        </Fragment>
    )
};

export default ProductList;