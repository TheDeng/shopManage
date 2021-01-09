import React,{Fragment,Component} from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import MyLayout from "./components/MyLayout";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Profile from './pages/Profile/Profile';
import ShopDetail from "./pages/Shop/ShopDetail";
import Member from "./pages/Member/Member";
import Table from "./pages/Table/Table";
import MemberDetail from "./pages/Member/MemberDetail";
import Good from "./pages/Shop/Good";
import Store from "./pages/Shop/Store";
import Stock from "./pages/Shop/Stock";
import Sell from "./pages/Shop/Sell";
import Operation from "./pages/Member/Operation";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import AddShop from "./pages/Shop/AddShop";
import AddMember from "./pages/Member/AddMember";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path='/' exact render = { (props) =>  <MyLayout {...props}> <Home {...props} /> </MyLayout>  }></Route>
          <Route path='/shop' render = { (props) =>  <MyLayout {...props}> <Shop /> </MyLayout>  }></Route>
          <Route path='/profile' render = { (props) =>  <MyLayout {...props}> <Profile /> </MyLayout>  }></Route>
          <Route path='/member' render = { (props) =>  <MyLayout {...props}> <Member /> </MyLayout>  }></Route>
          <Route path='/table' render = { (props) =>  <MyLayout {...props}> <Table /> </MyLayout>  }></Route>
          <Route path="/shopdetail/:id"  render = { (props) =>  <MyLayout {...props}> <ShopDetail /> </MyLayout>  } ></Route>
          <Route path="/memberdetail/:id"  render = { (props) =>  <MyLayout {...props}> <MemberDetail /> </MyLayout>  } ></Route>
          <Route path="/good/:id"  render = { (props) =>  <MyLayout {...props}> <Good /> </MyLayout>  } ></Route>
          <Route path="/store/:id"  render = { (props) =>  <MyLayout {...props}> <Store /> </MyLayout>  } ></Route>
          <Route path="/stock/:id"  render = { (props) =>  <MyLayout {...props}> <Stock /> </MyLayout>  } ></Route>
          <Route path="/sell/:id"  render = { (props) =>  <MyLayout {...props}> <Sell /> </MyLayout>  } ></Route>
          <Route path="/operation/:id"  render = { (props) =>  <MyLayout {...props}> <Operation /> </MyLayout>  } ></Route>
          <Route path="/addShop"  render = { (props) =>  <MyLayout {...props}> <AddShop /> </MyLayout>  } ></Route>
          <Route path="/addMember"  render = { (props) =>  <MyLayout {...props}> <AddMember /> </MyLayout>  } ></Route>


          <Route path="/login" component={Login} ></Route>
          <Route path="/register" component={Register}  ></Route>

        </Router>
      </Fragment>
    );
  }
}

export default App;
