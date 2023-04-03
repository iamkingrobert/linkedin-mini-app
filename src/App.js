import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import SidebarLeft from './Components/SidebarLeft';
import WidgetRight from './Components/WidgetRight';
import Header from './Header';

function App() {
  return (
    <div className="app">
    {/* App Header Component */}
     <Header/>
     {/* App Body */}
     <div className='app__body'>
     {/* Left Sidebar Component */}
     <SidebarLeft/>
     {/* Feed  Component */}
     <Feed/>
     {/* Right Widget Component */}
     <WidgetRight/>


     </div>
    </div>
  );
}

export default App;
