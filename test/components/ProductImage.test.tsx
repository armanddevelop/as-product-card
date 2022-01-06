import React from 'react';
import render from "react-test-renderer"
import ProductImage from '../../src/components/ProductImage';
import {ProductCard} from '../../src/components/ProductCard';
import { product2 } from '../data/products';

describe("Product image component UT",()=>{
  test("Test the image is send to the component",()=>{
    const wrapper = render.create(
      <>
        <ProductCard product={product2}>
          {
            ()=>(<ProductImage className='test' img={product2.img} style={{color:"green"}}/>)
          }
        </ProductCard>
      </>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe("Product image component UT",()=>{
  test("Test the image is no send to the component",()=>{
    const wrapper = render.create(
      <>
        <ProductCard product={product2}>
          {
            ()=>(<ProductImage className='test' img='https://alicha.jpg' style={{color:"green"}}/>)
          }
        </ProductCard>
      </>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});