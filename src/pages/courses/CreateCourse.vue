<template>
<div class="col-6 container">
    <b-col>
        <h2>Create Course</h2>
        <b-form-group
            label="Title"
            label-for="title-input"
        >
            <b-form-input
            id="title-input"
            v-model="form.title"
            type="text"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Code"
            label-for="code-input"
        >
            <b-form-textarea
                id="code-input"
                v-model="form.code"
                placeholder="Enter code..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>
      </b-form-group>

      <b-form-group
            label="Description"
            label-for="description-input"
        >
            <b-form-input
            id="description-input"
            v-model="form.description"
            rows="3"
            max-rows="6"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Points"
            label-for="points-input"
        >
            <b-form-input
            id="points-input"
            v-model="form.points"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Level"
            label-for="level-input"
        >
            <b-form-input
            id="level-input"
            v-model="form.level"
            required
            ></b-form-input>
        </b-form-group>

        <b-button @click= "submitForm()">Submit</b-button>
        <b-button @click= "cancel()">Cancel</b-button>
    </b-col>
</div>
</template>
<script>
import axios from 'axios'

export default {
    name: "CreateCourse",
    data() {
        return {
            form: {
                title: "",
                code: "",
                description: "",
                points: "",
                level: ""
            }
        }
    },
    methods: {
        submitForm() {
            let token = localStorage.getItem('token')
            axios.post(`https://college-api-mo.herokuapp.com/api/courses`, this.form,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data.data)
                     this.$router.push({
                         name: "courses_index"
                     })
                 }).catch(error => {
                     console.log(error)
                     console.log(error.response.data.errors)
                 })
        },
        cancel() {
            this.$router.go(-1)
        }
    }
}
</script>