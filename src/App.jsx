import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/common/Layout';
import QRCodeScanner from './components/QRCodeScanner';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Reservations from './pages/Reservations';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';

function AppContent() {
  const location = useLocation();

  // Define routes where Layout should not be applied
  const excludedRoutes = ['/','/order-placing/:orderID'];
  const isExcludedRoute = excludedRoutes.includes(location.pathname);

  return (
    <>
      {isExcludedRoute ?
      (
        <Routes>
          <Route path="/" element={<QRCodeScanner />} />
          <Route path="/order-placing/:orderId" element={<OrderTracking />} />
        </Routes>
      ) :
      (
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/order-placing/:orderId" element={<OrderTracking />} />
          </Routes>
        </Layout>
      )
      }
    </>
  );
}

// Only one App component, exported directly
export default function App() {
  return (
    <Router>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#10B981',
            color: '#FFFFFF',
            padding: '16px',
            borderRadius: '8px',
          },
        }}
      />
      <AppContent />
    </Router>
  );
}
