
import './App.scss';
import Header from './header.js'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  
  } from "react-router-dom";
import React ,{useState} from 'react';
import Menu from './menu.js'
import HeaderBlock from'./HeaderBlock.js'
import Login from './Login.js'
import SignUp from './SignUp.js'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route  exact path='/' >
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
            <HeaderBlock 
            title={'Model S'}
            description={'Order Online for Touchless Delivery'}
            buttonLeftText={'CUSTOM ORDER'}
            buttonRightText={'EXISTING INVENTORY'}
            backgroundImage={"model-3.jpg"}/>
            <HeaderBlock
            title={'Model Y'}
            description={'Order Online for Touchless Delivery'} 
            buttonLeftText={'CUSTOM ORDER'}
            buttonRightText={'EXISTING INVENTORY'}
            backgroundImage={"model-y.jpg"}/>
            <HeaderBlock
            title={'Model 3'}
            description={'Order Online for Touchless Delivery'} 
            buttonLeftText={'CUSTOM ORDER'}
            buttonRightText={'EXISTING INVENTORY'}
            backgroundImage={"model-3.jpg"}/>
            <HeaderBlock
            title={'Model X'}
            description={'Order Online for Touchless Delivery'} 
            buttonLeftText={'CUSTOM ORDER'}
            buttonRightText={'EXISTING INVENTORY'}
            backgroundImage={"model-x.jpg"}/>
            <HeaderBlock
            title={'Solar Panels'}
            description={'Lowest Cost Solar Panels in America'} 
            buttonLeftText={'Oder Now'}
            buttonRightText={'Learn More'}
            backgroundImage={"solar-panel.jpg"}/>
            <HeaderBlock
            title={'Solar Roof'}
            description={'Produce Clean Energy From Your Roof'} 
            buttonLeftText={'Oder Now'}
            buttonRightText={'Learn More'}
            backgroundImage={"solar-roof.jpg"}/>
            <HeaderBlock
            title={'Accessories'}
            description={'Produce Clean Energy From Your Roof'} 
            buttonLeftText={'Shop Now'}
            backgroundImage={"accessories.jpg"}/>
        </Route>
      <Route  exact  path='/login'>
         <Login/>
      </Route>
      <Route exact path='/signup'>
        <SignUp/>
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
 

