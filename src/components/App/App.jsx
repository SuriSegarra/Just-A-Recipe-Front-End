import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import RecipeViewer from '../../containers/RecipeList/RecipeViewer';
import RecipeDetailViewer from '../../containers/RecipeDetailViewer/RecipeDetailViewer';
import SearchBar from '../Search/SearchBar';
//import Header from '../Header/Header';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <SearchBar />
          <Switch>

            <Route exact path="/" component={RecipeViewer} />
            <Route exact path="/:id" component={RecipeDetailViewer} />
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}
