import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetail from './BlogDetail';
import NotFound from './notFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
          {/* object and boolean cannot be render */}
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/create">
                <CreateBlog/>
            </Route>
            <Route exact path="/blogs/:id">
                <BlogDetail/>
            </Route>
            <Route path="*"> 
            {/* * catch rest all route that are not defined here and then sent to below component which is not found our case and this must be provided below otherwise it will execute everytime when a particular route gets called because of *  */}
                <NotFound/>
            </Route>
          </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
