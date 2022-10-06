import { CartState } from '../context/Context';

const ProductRow = ({ product }) => {
  const {
    id,
    category,
    description,
    image,
    price,
    quantity,
    rating: { rate },
    inStock,
    inCart,
    inCartQuantity,
    title,
  } = product;

  const {
    state: { products },
    dispatch,
  } = CartState();

  const toggleToCart = () => {
    let data = [...products];
    data = data.map((item) => {
      if (item.id === id) {
        item.inCart = !inCart;
        return item;
      } else {
        return item;
      }
    });

    dispatch({ type: 'addRemoveToCart', payload: data });
  };

  const addValueToCart = (val) => {
    val = val > quantity ? quantity : val;
    let data = [...products];
    data = data.map((item) => {
      if (item.id === id) {
        item.inCartQuantity = val;
        return item;
      } else {
        return item;
      }
    });

    dispatch({ type: 'addCartQuantity', payload: data });
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-24 h-24">
            <img
              className="w-full h-full rounded-md"
              src={image}
              alt="product image"
            />
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {Math.floor(rate) + '☆'}{' '}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {inStock ? (
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">{quantity} In Stock</span>
          </span>
        ) : (
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
            ></span>
            <span className="relative">Out Of Stock</span>
          </span>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${price}</p>
      </td>
      <td
        className="px-5 py-5 inline-flex justify-evenly items-center border-b border-gray-200 bg-white text-sm"
        style={{ padding: '3.3rem 0rem' }}
      >
        <input
          type="text"
          id="default-input"
          value={inCartQuantity}
          class="bg-gray-50 border w-1/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={inStock ? false : true}
          onChange={() => {
            addValueToCart(event.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
        >
          <path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z" />
        </svg>
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={inCart}
            onClick={toggleToCart}
            class="w-4 h-4 disabled text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            disabled={inStock ? false : true}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
