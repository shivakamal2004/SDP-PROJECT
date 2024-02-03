import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration'
import Login from './components/Login';
import Appbar from './components/Appbar'
import Profile from './components/Profile';
import Entry from './components/Entry';
import Placement from './components/Placement';
import Error from './components/Error';

function App({store}) {

  function Page() {
    switch(store.getState().NavReducer) {
      case "Login":
        return(<div><Login store={store} /></div>)
      case "Registration":
        return(<div><Registration /></div>)
      case "Profile":
        if(localStorage.getItem("role") == 1)
          return(<div><Profile /></div>)
        else
          return(<div><Error /></div>)
      case "Entry":
        if(localStorage.getItem("role") == 1)
          return(<div><Entry /></div>)
        else
          return(<div><Error /></div>)
      case "Placement":
        if(localStorage.getItem("role") == 1 || localStorage.getItem("role") === 2)
          return(<div><Placement /></div>)
        else
          return(<div><Error /></div>)
      default: 
          return(null)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Task Management System</p>
      </header>
      <div className="App-body">
        <Appbar store={store} />
        <center><Page /></center>
      </div>
    </div>
  );
}

export default App;
