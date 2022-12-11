import './App.css';
import Heading from './components/heading/Heading';
import Ratings from './components/rating/Ratings'
import Quotes from './components/quotes/Quotes';

function App() {

  return (
    <div className="App flex_row">
      <Heading />
      <Ratings />
      <Quotes />
    </div>
  );
}

export default App;
