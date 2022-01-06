import React from 'react';
import render from "react-test-renderer";
//import {fireEvent} from "@testing-library/dom";
import {ProductCard} from '../../src/components/ProductCard';
import { product2 } from '../data/products';

const {act} = render;

describe("Product Card component UT",()=>{
  test("Test the product card component",()=>{
    const wrapper = render.create(
      <>
        <ProductCard product={product2}>
          {
            ()=>(
              <h1>Product card</h1>
            )
          }
        </ProductCard>
      </>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
   test("increaseBy UT",()=>{
    const mokedEvent:any={
         target:{
           name:"add-count",
           value:1
         }
    }
    const wrapper = render.create(
      <>
        <ProductCard product={product2}>
          {
            ({count,increaseBy})=>(
              <>
                <h1>This is the value of</h1>
                <span>{count}</span>
                <button value={1} name="add-count" onClick={(e)=>increaseBy(e)}></button>
              </>
            )
          }
        </ProductCard>
      </>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
    act(()=>{
      (tree as any).children[2].props.onClick(mokedEvent);
    });
    tree =wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});