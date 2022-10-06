import { Link, useNavigate } from 'react-router-dom';
import { CartState } from '../context/Context';

const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { products },
    dispatch,
  } = CartState();

  const filterCartProducts = () => {
    let cartData = products.filter((item) => item.inCart === true);
    console.log(cartData);
    return cartData;
  };
  const removeProduct = (id) => {
    let updateData = filterCartProducts().map((item) => {
      if (item.id == id) {
        item.inCart = !item.inCart;
        return item;
      } else {
        return item;
      }
    });

    dispatch({ type: 'updateCartData', payload: updateData });
  };
  const checkout = () => {
    if (filterCartProducts().length > 0) {
      let updateData = filterCartProducts().map((product) => {
        product.quantity = Math.floor(Math.random() * 10);
        product.inStock = product.quantity ? true : false;
        product.inCart = false;
        product.inCartQuantity = 1;
        product.price = Math.floor(product.price);
        return product;
      });

      dispatch({ type: 'shipCartOrder', payload: updateData });
      navigate('/success');
    }
  };
  const incrementProduct = (id) => {
    let updateData = filterCartProducts().map((item) => {
      if (item.id == id) {
        item.inCartQuantity = item.inCartQuantity + 1;
        return item;
      } else {
        return item;
      }
    });
    dispatch({ type: 'updateCartData', payload: updateData });
  };
  const decrementProduct = (id) => {
    let updateData = filterCartProducts().map((item) => {
      if (item.id == id) {
        item.inCartQuantity = item.inCartQuantity - 1;
        return item;
      } else {
        return item;
      }
    });
    dispatch({ type: 'updateCartData', payload: updateData });
  };

  return (
    <div className="bg-gray-100 flex w-screen items-center ">
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10 h-screen overflow-auto">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">
                {filterCartProducts().reduce(
                  (acc, curr) => acc + Number(curr.inCartQuantity),
                  0
                )}{' '}
                Items
              </h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {filterCartProducts().map((item, key) => {
              return (
                <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div class="flex w-2/5">
                    <div class="w-20">
                      <img class="h-24" src={item.image} alt="" />
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                      <span class="font-bold text-sm">{item.title}</span>
                      <button
                        onClick={() => {
                          removeProduct(item.id);
                        }}
                        class="text-white w-28 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-center w-1/5">
                    <button
                      disabled={item.inCartQuantity == 1 ? true : false}
                      onClick={() => {
                        decrementProduct(item.id);
                      }}
                    >
                      <svg
                        class="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                    <input
                      class="mx-2 border text-center w-8"
                      type="text"
                      value={item.inCartQuantity}
                    />

                    <button
                      disabled={
                        item.inCartQuantity === item.quantity ? true : false
                      }
                      onClick={() => {
                        incrementProduct(item.id);
                      }}
                    >
                      <svg
                        class="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                  </div>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    ${item.price}
                  </span>
                  <span class="text-center w-1/5 font-semibold text-sm">
                    ${item.price * item.inCartQuantity}
                  </span>
                </div>
              );
            })}
            {filterCartProducts().length == 0 && (
              <div className="flex justify-center p-20">Nothing In Cart</div>
            )}
            <Link
              to="/"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" class="w-1/4 bg-white px-8 py-10 border-l-4">
            <h1 class="font-semibold text-2xl  pb-8">Order Summary</h1>
            <div class=" mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  $
                  {filterCartProducts().reduce(
                    (acc, curr) =>
                      acc + Number(curr.inCartQuantity) * Number(curr.price),
                    0
                  )}
                </span>
              </div>
              <button
                disabled={filterCartProducts().length > 0 ? false : true}
                class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
