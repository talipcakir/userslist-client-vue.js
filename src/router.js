import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/",
            name: "home",
            component: () =>
                import ("./components/Home")
        },
        {
            path: "/users",
            alias: "/users",
            name: "users",
            component: () =>
                import ("./components/UsersList")
        },
        {
            path: "/users/:id",
            name: "user-details",
            component: () =>
                import ("./components/User")
        },
        {
            path: "/register",
            name: "Register",
            component: () =>
                import ("./components/Register")
        },
        {
            path: "/login",
            name: "Login",
            component: () =>
                import ("./components/Login")
        },
        {
            path: "*",
            name: "404",
            component: () =>
                import ("./components/404")
        }
    ]
});