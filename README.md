# MARS

install firebase

```bash
pnpm install firebase
```

if you need emulators (run locally) then install firebase cli

Create the .firebase.ts file in the root directory with the code you grab from the project console

add the .firebase.ts file to the .gitignore file and the main.ts file

```bash

```bash
Make sure you add the auth with the getAuth() function

```bash
import { getAuth } from "firebase/auth";
```

install the vue-router

```bash
pnpm install vue-router
```

create the router.ts file in the src directory

```bash
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

```

add the router to the main.ts file
