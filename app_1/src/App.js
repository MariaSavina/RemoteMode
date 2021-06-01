import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import AllCards from './Components/AllCards';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import data from './data.json'
import Articles from './Components/Articles';



function App() {
  const articles=data.map((el)=>{
    return(
    <Route exact path={`/articles/${el.id}`} key={el.id}>
      <Articles description={el.articleDescr} src={el.img} title={el.description} commentName={el.commentName} сomment={el.сomment}/>
    </Route>
  )})
  return (
    <div className="App">
     
      <main className="App-main">
        <Router>
          <header className="App-header">
            <Nav />
          </header>
          <Switch>
            <Route exact path="/" component={AllCards}/>
            {articles}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
