import './App.css';
import Header from './components/Header';
import UserInfoForm from './components/UserInfoForm';
import BenefitsTable from './components/BenefitsTable';
import TaskScheduler from './components/TaskScheduler';


function App() {
  return (
    <div>
      <Header />
      <UserInfoForm />
      <BenefitsTable />
      <TaskScheduler />
      
    </div>
  );
}

export default App;
