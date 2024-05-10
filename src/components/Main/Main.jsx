import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Users from '../Users/Users';
import Vacancies from '../Vacancies/Vacancies';
import Turnstiles from '../Turnstiles/Turnstiles';

function Main() {
  return (
    <main className="h-full w-full lg:w-4/5 px-4 bg-neutral-950 md:px-3 overflow-y-auto fixed right-0 transition-all">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vacancies" component={Vacancies} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/turnstiles" component={Turnstiles} />
      </Switch>
    </main>
  );
}

export default Main;
