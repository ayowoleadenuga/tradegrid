import React from 'react'
import Product from '../../assets/product.png'
import Tabs from './Tabs'
function OurProduct() {

    return (
      <section className="product-sect">
        <div className="product-div">
          <h3>Our Products</h3>
          <p>
            Our 5 major product offerings lie along the end-to-end value chain
            of a deal execution pipeline, from Deal Sourcing, to Financing and
            Trade Logistics.
          </p>
        </div>
        <img src={Product} alt="" />
        <Tabs/>
      </section>
    )
}

export default OurProduct
