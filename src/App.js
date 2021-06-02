import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import AllCards from './Components/AllCards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Articles from './Components/Articles';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { validateCreatingCard } from './assets/validation';



function App() {
  const [fireCollection, setFireCollection] = useState([]);

  const getData = async () => {
    const db = firebase.firestore();
    const collections = await db.collection('reactdeved').get();
    const beforeValidate = collections.docs.map(el => el.data());
    setFireCollection(validateCreatingCard(beforeValidate));
  };
  useEffect(() => {
    getData();
  }, []);

  const articles = fireCollection.map(el => {
    return (
      <Route path={`/articles/${el.id}`} key={el.id}>
        <Articles description={el.description} src={el.imageUrl} title={el.title} сomment={el.expertComment} />
      </Route>
    );
  });


  return (
    <div className="App">
     
      <main className="App-main">
        <Router>
          <header className="App-header">
            <Nav />
          </header>
          <Switch>
            <Route exact path="/articles">
              <AllCards data={fireCollection}/>
              </Route> 
            {articles}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
