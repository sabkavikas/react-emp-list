import EmployeeForm from './employeeForm';
import EmployeeList from './employeeList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={EmployeeList} />
        <Route path='/create' component={EmployeeForm} />
      </Router>
    </div>
  );
}

export default App;
