<template>
<div>
    <h2>Show Course</h2>

    <b-button :to="{name: 'course_edit', params: { id: $route.params.id }}" class="float-right" variant="warning">Edit</b-button>
    <b-button @click= "deleteCourse()">Delete</b-button>


    
    <p>{{ course.data.title }}</p>
    <p>{{ course.data.code }}</p>
    <p>{{ course.data.description }}</p>


</div>

</template>

<script>

import axios from 'axios'

export default {
    name: "CourseShow",
    components: {

    },
    data(){
        return{
            course: {}
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            let token = localStorage.getItem('token')

            axios.get(`https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    console.log(response.data)
                    this.course = response.data
                })
                .catch(error => console.log(error))
        },
        deleteCourse() {

            let token = localStorage.getItem('token')

            axios.delete(`https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "courses_index",
                     })
                 }).catch(error => {
                     console.log(error)
                     console.log(error.response.data.errors)
                 })
        }
    }
}

</script>

<style scoped>

</style>
