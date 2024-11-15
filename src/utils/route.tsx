import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home';
import Investment from '../pages/Investment';
import Withrawals from '../pages/Withrawals';
import ReferralHistory from '../pages/ReferralHistory';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "investments",
        element: <Investment />
      },
      {
        path: "withdrawals",
        element: <Withrawals />
      },
      {
        path: "referral-history",
        element: <ReferralHistory />
      }
    ]
  }
]);

export default route