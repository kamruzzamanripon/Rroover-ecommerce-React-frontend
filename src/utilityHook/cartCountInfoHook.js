
export const cartTotal = (cartItemsData)=>{
      return cartItemsData && cartItemsData.length > 0 ?

          cartItemsData.reduce((total, product) => {
              return total + product.quantity * product.actual_price;
          }, 0)

          : 0
}

export const ProductCount = (cartItemsData)=>{
    return cartItemsData && cartItemsData?.length > 0 ?

        cartItemsData?.reduce((total, product) => {
            return total + product?.quantity?.length;
        }, 0)

        : 0
}
