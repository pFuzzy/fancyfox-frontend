import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import DetailPage from "./components/DetailPage";
import MainPage from "./components/MainPage";
import { AddButton, Header, Logo } from './styled-components/HeaderStyle';

function App() {
  return (
    <Router>
      <Header>
        <Logo to="/"/>
        <AddButton to="/add">Add post</AddButton>
      </Header>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/details/:id" component={DetailPage}></Route>
      <Route exact path="/add">
        <AddPost />
      </Route>
    </Router>
  );
}

export default App;
