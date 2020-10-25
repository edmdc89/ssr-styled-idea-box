import React from "react";
// import { Route, Switch } from 'react-router-dom';
// import Home from "../../components/Home/Home";
// import NotFound from "../../components/Common/NotFound";
import IdeaForm from "../../modules/IdeaForm/IdeaForm";
import base from "../../ui/common/base";
import { darkTheme } from "../../ui/common/colors";

const App = (): JSX.Element => (
  <div
    style={{
      backgroundColor: darkTheme.bg,
      color: darkTheme.textLight,
      height: "100vh",
      overflowY: "hidden",
    }}
  >
    <h1>Hello World</h1>
    <IdeaForm />
    <style jsx global>
      {base}
    </style>
  </div>
);

export default App;

// <Switch>
//   <Route path="/" exact component={Home}></Route>
//   <Route component={NotFound} />
// </Switch>
