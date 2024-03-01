import ChefMain from "@/components/admin/admin-pages/chef-management/ChefMain";
import Dashboard from "@/components/admin/admin-pages/Dashboard";
import FoodMenu from "@/components/admin/admin-pages/food-menu/FoodMenu";
import User from "@/components/admin/admin-pages/user/User";
import MainDashboard from "@/components/chef/chef-pages/Dashboard";
import ChefMenu from "@/components/chef/chef-pages/food-menu/ChefMenu";

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

export const chefSideMenu = [
  {
    id: 0,
    label: "Chef-Dashboard",
    component: <MainDashboard />,
    // icon: <DashboardIcon />,
  },
  {
    id: 1,
    label: "Menu Items",
    component : <ChefMenu />,
  },
  {
    id: 2,
    label: "settings",
    // component : <User />,
  },
  // {
  //   id: 3,
  //   label: " Menu Items",
  //   component : <FoodMenu />,
  // },
  // {
  //   id: 4,
  //   label: "Order management",
  //   // component : <Property />,
  // },
  // {
  //   id: 5,
  //   label: "Order History",
  //   // component : <Dashboard />,
  // },
];

export const allChefs = [
  {
    "_id": "65d61ebfffeaab0d0d105990",
    "name": "Jayant",
    "specialty": "Tea, coffee",
    "bio": "This is BIO",
    "experience": 20,
    "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
    "__v": 0
  },
  {
    "_id": "65d61ebfffeaab0d0d105991",
    "name": "Alice",
    "specialty": "Burgers, Fries",
    "bio": "This is BIO",
    "experience": 15,
    "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
    "__v": 0
  },
  {
    "_id": "65d61ebfffeaab0d0d105992",
    "name": "Bob",
    "specialty": "Pizza, Pasta",
    "bio": "This is BIO",
    "experience": 25,
    "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
    "__v": 0
  },
  {
    "_id": "65d61ebfffeaab0d0d105993",
    "name": "Eva",
    "specialty": "Pasta, Risotto",
    "bio": "This is BIO",
    "experience": 18,
    "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
    "__v": 0
  },
  // {
  //   "_id": "65d61ebfffeaab0d0d105994",
  //   "name": "Yuki",
  //   "specialty": "Sushi, Sashimi",
  //   "bio": "This is BIO",
  //   "experience": 22,
  //   "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
  //   "__v": 0
  // },
  // {
  //   "_id": "65d61ebfffeaab0d0d105995",
  //   "name": "John",
  //   "specialty": "Steak, Ribs",
  //   "bio": "This is BIO",
  //   "experience": 30,
  //   "images": "https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg",
  //   "__v": 0
  // }
];


export const foodCategories = ["Italian", "Japanese", "American", "Mexican", "Indian", "Chinese", "French", "Mediterranean"];

