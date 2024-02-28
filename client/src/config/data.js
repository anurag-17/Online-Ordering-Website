import ChefMain from "@/components/admin/admin-pages/chef-management/ChefMain";
import Dashboard from "@/components/admin/admin-pages/Dashboard";
import FoodMenu from "@/components/admin/admin-pages/food-menu/FoodMenu";
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
    label: " Menu Items",
    component : <FoodMenu />,
  },
  {
    id: 4,
    label: "Order management",
    // component : <Property />,
  },
  {
    id: 5,
    label: "Order History",
    // component : <Dashboard />,
  },
];
