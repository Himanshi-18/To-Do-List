import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [filter, setFilter] = useState('All'); // State to track filter selection

  const handleFilterChange = (status) => {
    setFilter(status); // Update filter when user selects a filter
  };

  return (
    <div className="App card border-0">
      <div className='d-flex justify-content-between'>
        <h1>To-Do List</h1>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Status
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange('Active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange('Completed')}
              >
                Completed
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange('All')}
              >
                All
              </a>
            </li>
          </ul>
        </div>
      </div>
      <AddTask />
      <TaskList filter={filter} /> {/* Pass the filter state to TaskList */}
    </div>
  );
}

export default App;
