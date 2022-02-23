import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductProvider } from './contexts/products';
import PublicRoute from './components/routes/PublicRoute';

// Public Routes
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/NotFound';
import Landing from './components/front/pages/Landing';
import About from './components/front/pages/About';
import Blog from './components/front/pages/Blog';
import Shop from './components/front/pages/Shop';

function App() {
  useEffect(() => {
    // Ici, vérification du localstorage pour le token d'authentification
    // S'il est présent on configure axios, sinon rien
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/about" component={About} />
        <ProductProvider>
          <PublicRoute path="/shop" component={Shop} />
        </ProductProvider>
        <PublicRoute exact path="/blog" component={Blog} />

        {/* Private Routes */}

        <Route to="/404" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
