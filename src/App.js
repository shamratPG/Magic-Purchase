import { RouterProvider } from 'react-router-dom';
import './App.css';
import './App.scss';
import router from './Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
