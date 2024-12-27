import PropTypes from 'prop-types';
import Navbar from './Navbar';

export default function PageLayout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};