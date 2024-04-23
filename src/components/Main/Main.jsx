import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Users from '../Users/Users';
import Vanacies from '../Vanacies/Vanacies';

function Main() {
  return (
    <main className="h-full w-4/5 px-10 py-5 bg-neutral-950 md:w-full sm:w-full overflow-y-auto">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vanacies" component={Vanacies} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </main>
  );
}

export default Main;
