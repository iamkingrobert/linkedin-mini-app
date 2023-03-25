import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import SidebarLeft from './Components/SidebarLeft';
import WidgetRight from './Components/WidgetRight';
import Header from './Header';

function App() {
  return (
    <div className="app">
     <Header/>
     
     {/* App Body */}
     <div className='app__body'>
     {/* Left Sidebar */}
     <SidebarLeft/>
     {/* Feed */}
     <Feed/>
     {/* Right Widget */}
     <WidgetRight/>


     </div>
    </div>
  );
}

export default App;
