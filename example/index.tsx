import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductImage,ProductTitle,ProductButtons } from '../.';
import { ProductCard } from '../dist/components/ProductCard';
const product = {
  id:"1",
  title:"coffee Mug-Card",
 //img:"./coffee-mug.png",
  noTitleImage:"no-coffee"
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues = {{
            count:3,
            //maxCount:12,
        }}
      >
        {
          ({reset,maxCount,isMaxCountReached,count,increaseBy})=>(
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons addButton="button-add" subtractButton = "button-subtract"/>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
