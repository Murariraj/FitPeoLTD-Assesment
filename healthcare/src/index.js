import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header1 from './Header/Header1';
import Aside from './Aside/Aside';
import "bootstrap-icons/font/bootstrap-icons.css";
import Calendar from './CalendarView/Calendar';
import DashboardOverview from './DashboardMainContent/DashboardOverview';
import AnatomySection from './DashboardMainContent/AnatomySection';
import ActivityFeed from './ActivityFeed';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div >

      <App />
      <Header1 />
      <Aside />
      <Calendar />
      <DashboardOverview />
      <AnatomySection />
      <ActivityFeed />

    </div >
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
