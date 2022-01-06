import React from 'react';
import render from "react-test-renderer"
import ProductTitle from '../../src/components/ProductTitle';
import {ProductCard} from '../../src/components/ProductCard';
import {product1} from "../data/products";



describe('Product Title component UT', () => {
  test('Show the right component with the title', ()=>{
    const wrapper = render.create(
    <>
      <ProductCard product={product1}>
        {
          ()=>(<ProductTitle title={3} className='hola'/>)
        }
      </ProductCard>
    </>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  })
});
