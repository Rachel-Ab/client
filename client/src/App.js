import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { ProductProvider } from './contexts/products';
import { CartProvider } from './contexts/cart';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
// Public Routes
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Landing from './components/front/pages/Landing';
import About from './components/front/pages/About';
import Blog from './components/front/pages/Blog';
import Shop from './components/front/pages/Shop';
import ProdPage from './components/front/pages/ProdPage';
import Cart from './components/front/pages/Cart';
import WelcomeAdmin from './components/dashboard/WelcomeAdmin';

const App = () => {
  useEffect(() => {
    // Ici, vérification du localstorage pour le token d'authentification
    // S'il est présent on configure axios, sinon rien

    // ? Toujours utile ?
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]');
    }
  }, []);

  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PublicRoute path="/register" component={Register} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/about" component={About} />
            <PublicRoute path="/shop" component={Shop} />
            <PublicRoute path="/product/:id" component={ProdPage} />
            <PublicRoute path="/cart" component={Cart} />
            <PublicRoute path="/blog" component={Blog} />

            {/* Private Routes */}
            <PrivateRoute
              path="/dashboard"
              component={WelcomeAdmin}
              authenticated={true}
              loading={false}
            />
            <PublicRoute to="/404" component={NotFound} />
          </Switch>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
