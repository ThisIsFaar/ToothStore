import Filter from '../components/Filter';
import ProductRow from '../components/ProductRow';
import ProductsHeadRow from '../components/ProductsHeadRow';
import { CartState } from '../context/Context';

const Shop = () => {
  const {
    state: { products },
  } = CartState();

  const {
    filterProductState: { byCategory, byRating, bySearch },
  } = CartState();
  const filterData = () => {
    let data = [...products];

    if (byCategory !== 'all') {
      data = data.filter(
        (item) => item.category.toLowerCase() === byCategory.toLowerCase()
      );
    }

    if (byRating !== 'all') {
      data = data.filter((item) => Math.floor(item.rating.rate) == byRating);
    }

    if (bySearch != '') {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(bySearch.toLowerCase())
      );
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
                No Matching Product Found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
