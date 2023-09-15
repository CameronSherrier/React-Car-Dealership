import carHome from '../pages/Home';
import carDashboard from '../pages/Dashboard';
import About from '../pages/About';

interface RouteType {
  path: string,
  component: () => JSX.Element,
  name: string,
  protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: carHome,
      name: "Car Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: carDashboard,
      name: "Car Inventroy Dashboard",
      protected: true
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false
    }
];

export default routes