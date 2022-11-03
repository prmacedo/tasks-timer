import React from 'react';
import ReactDOM from 'react-dom/client';
import { StopwatchContextProvider } from './context/StopwatchContext';
import { TasksContextProvider } from './context/TasksContext';
import './index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksContextProvider>
      <StopwatchContextProvider>
        <App />
      </StopwatchContextProvider>
    </TasksContextProvider>
  </React.StrictMode>
);