import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { ProductType } from '../../data/products/types';
import '../../styles/MainPage.css';

export default function ProductGrid({ items }) {
  return (
    <div className="item-grid">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  items: PropTypes.arrayOf(ProductType).isRequired
};