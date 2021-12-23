import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { loadLists } from './Store/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLists());
  }, []);

  return (
    <>
      <div>
        <NavLink to="/todo" className="nav-link">ToDo</NavLink>
      </div>
      <div className="container-sm">
        <Outlet />
      </div>
    </>
  );
}

export default App;