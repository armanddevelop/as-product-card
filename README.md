# AS-Product-Card

This is a package of test to release in NPM

### Armando Salamanca Ayon

## Exemple

```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from "as-product-card";
```

```
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
```
