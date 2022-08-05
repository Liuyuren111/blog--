export const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../view/LayoutPage.vue"),
    // redirect: {name: 'index'},
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("../view/index/IndexPage.vue"),
      }
    ]
  },
];
