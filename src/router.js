import Vue from "vue";
import Router from "vue-router"
import Home from "./pages/Home.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        //Courses
        {
            path: "/courses",
            name: "courses_index",
            component: () => import("./pages/courses/Index.vue")
        },
        {
            path: "/course/:id",
            name: "course_show",
            component: () => import("./pages/courses/CourseShow.vue")
        },
        {
            path: "/course/create",
            name: "create_course",
            component: () => import("./pages/courses/CreateCourse.vue")
        },
        {
            path: "/course/edit/:id",
            name: "course_edit",
            component: () => import("./pages/courses/EditCourse.vue")
        },
    ]
})