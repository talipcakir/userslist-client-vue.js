<template>
<div class="formContainer">
    <div class="formBox">
        <div class="formClass">
            <form v-if="!submitted" @submit.prevent="addUserFunc">
                <span class="formHead">
                    Register
                </span>
                <div>
                    <input class="formInput" type="text" v-model="user.name" placeholder="Full Name" autocomplete="off" required />
                </div>
                <div>
                    <input class="formInput" type="mail" v-model="user.email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autocomplete="off" required />
                </div>
                <div>
                    <input class="formInput" type="password" v-model="user.password" placeholder="Password" autocomplete="off" required />
                </div>
                <div>
                    <button type="submit" value="Sign Up" title="Submit form" class="formButton">
                        <span>Sign up</span>
                    </button>
                </div>
            </form>
            <div v-else>
                <h4>You submitted successfully!</h4>
                <button class="btn" @click="resetPage">Sign Up</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
    name: "register",
    data() {
        return {
            user: {
                id: null,
                name: "",
                email: "",
                password: ""
            },
            submitted: false
        };
    },
    methods: {
        addUserFunc() {
            var data = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password
            };
            UserDataService.create(data)
                .then(response => {
                    this.user.id = response.data.id;
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });

        },
        resetPage() {
            this.submitted = false;
            this.user = {};
        }
    }
};
</script>