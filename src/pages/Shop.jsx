import Filter from '../components/Filter';
import ProductRow from '../components/ProductRow';
import ProductsHeadRow from '../components/ProductsHeadRow';
import { CartState } from '../context/Context';

const Shop = () => {
  const {
    state: { products },
    loading,
  } = CartState();

  const {
    filterProductState: { byCategory, byRating, bySearch },
  } = CartState();
  const filterData = () => {
    let data = [...products];

    if (byCategory !== 'all' || byRating !== 'all' || bySearch != '') {
      data = data.filter((item) => {
        if (
          byCategory !== 'all' &&
          item.category.toLowerCase() !== byCategory.toLowerCase()
        )
          return false;
        if (
          byRating !== 'all' &&
          Number(Math.floor(item.rating.rate)) !== Number(byRating)
        )
          return false;

        if (
          bySearch != '' &&
          !item.title.toLowerCase().includes(bySearch.toLowerCase())
        )
          return false;

        return true;
      });
    }
    return data;
  };
  console.log(filterData());
  return (
    <>
      <Filter />
      <div>
        <div className="px-4 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <ProductsHeadRow />
              </thead>
              <tbody>
                {filterData().map((product, key) => {
                  return <ProductRow key={key} product={product} />;
                })}
              </tbody>
            </table>
            {filterData().length <= 0 && (
              <div className="flex justify-center p-20">
                No Matching Product Found, or maybe dealy in the server
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
