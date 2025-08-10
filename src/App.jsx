import { Switch, Route } from "wouter";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/not-found.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;