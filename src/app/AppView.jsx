import React from "react";
import {Route, Switch} from "react-router-dom";
import Helmet from "react-helmet";
import NotFound from "../errors/NotFound";
import Login from "../pages/login/Login";
import SystemInfo from "../pages/systemInfo/SystemInfo";
import Landing from "../pages/landing/Landing";
import {useAppStyles} from "./appStyles";
import AuthRoute from "../security/AuthRoute";
import {ADMIN, ALL, OMNI, HR} from "../security/Authorities";
import AccessDenied from "../errors/AccessDenied";
import TaskList from "../pages/tasklist/TaskList";
import Task from "../pages/task/Task";
import Vacations from "../pages/vacations/Vacations";
import Profile from "../pages/profile/Profile";


const App = () => {
  const classes = useAppStyles();
  return (
    <div>
      <Helmet bodyAttributes={{class: classes.body}}/>
      <Switch>
              <Route path="/login" component={Login} exact/>
              <AuthRoute path="/" component={Landing} authorities={ALL} exact/>
              <AuthRoute path="/system" component={SystemInfo} authorities={[OMNI,ADMIN]} exact/>
              <AuthRoute path="/task/:id" component={Task} authorities={ALL} exact/>
              <AuthRoute path="/task-list" component={TaskList} authorities={ALL}  exact/>
              <AuthRoute path="/vacations" component={Vacations} authorities={ALL} exact/>
              <AuthRoute path="/profile" component={Profile} authorities={ALL} exact/>
              <AuthRoute path="/access-denied" component={AccessDenied} exact/>
              <AuthRoute path="/" component={NotFound}/>
            </Switch>
    </div>
  );
};

export default App;
