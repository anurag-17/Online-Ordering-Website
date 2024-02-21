import ChefMain from "@/components/admin/admin-pages/chef-management/ChefMain";
import Dashboard from "@/components/admin/admin-pages/Dashboard";
import User from "@/components/admin/admin-pages/user/User";

export const sideMenus = [
  {
    id: 0,
    label: "Dashboard",
    component: <Dashboard />,
    // icon: <DashboardIcon />,
  },
  {
    id: 1,
    label: "Chef managment",
    component : <ChefMain />,
  },
  {
    id: 2,
    label: "User management",
    component : <User />,
  },
  {
    id: 3,
    label: "Order management",
    // component : <Property />,
  },
  {
    id: 4,
    label: "Order History",
    // component : <Dashboard />,
  },
];
