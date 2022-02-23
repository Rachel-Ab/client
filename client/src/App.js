import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicRoute from './components/routes/PublicRoute';

// Public Routes
import NotFound from './components/NotFound';
import Landing from './components/front/pages/Landing';
import About from './components/front/pages/About';
import Blog from './components/front/pages/Blog';

function App() {
  useEffect(() => {
    console.log("est ce qu'on a un token ?");
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/*<PublicRoute path="/register" component={Register} />*/}
        {/*<PublicRoute path="/login" component={Login} />*/}
        <PublicRoute path="/about" component={About} />

        <PublicRoute exact path="/blog" component={Blog} />

        {/* Private Routes */}

        <Route to="/404" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
