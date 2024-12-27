import { useState, useEffect } from 'react';
import { items } from '../data/products/productData';
import ItemCard from './product/ItemCard';
import LoadingSpinner from './ui/LoadingSpinner';
import '../styles/MainPage.css';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <LoadingSpinner size="large" variant="dark"  />
        <p>Loading Products...</p>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h2 className="page-title">Available Items</h2>
      <div className="item-grid">
        {currentItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}