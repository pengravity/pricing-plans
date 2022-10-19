import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import SubList from './components/subscription/SubList';

function App() {
  return (
    <div>
      <SubList />
      <ToastContainer className='toastBody' />
    </div>
  );
}

export default App;
