import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { RouteHome, RouteLogin } from './route/Routes';
import DefaultLayouts from './route/Defaultlayout';

function App() {
  return ( 
    <>
   <BrowserRouter>
      <Routes>
      {RouteLogin.map((item, index) => (
      <Route key={index} path={item.path} element={item.element} />
       ))}
        {RouteHome.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={
              <DefaultLayouts content={item.element} />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
