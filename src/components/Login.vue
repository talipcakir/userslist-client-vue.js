<template>
<div class="formContainer">
    <div class="formBox">
        <div class="formClass">
            <!-- <form v-if="!submitted" @submit.prevent="addUserFunc"> -->
            <form @submit.prevent="loginFunc">
                <span class="formHead">
                    Login
                </span>
                <div>
                    <input name="username" class="formInput" type="title"  placeholder="Username" pattern="[a-z]{1,15}" autocomplete="off" required />
                </div>
                <div>
                    <input name="password" class="formInput" type="password" placeholder="Password" autocomplete="off" required />
                </div>
                <div>
                    <button type="submit" value="Sign In" title="Submit form" class="formButton">
                        <span>Sign In</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import UserDataService from "../services/UserDataService";
export default {
    name: "login",
    data() {
        return {
            users: [],
            username: "",
            password:""
        };
    },
    methods: {
        loginFunc() {
                var userData = []
                userData = UserDataService.getAll()
                let usernameData = []
                usernameData = JSON.parse(userData.getAll('username'));
                var usernameText = document.querySelector("input[name=username]").value
                var passwordText = document.querySelector("input[name=password").value
                console.log(usernameText +" "+ passwordText + " " + usernameData)
        }
    }
}

// export default {
//     name: "login",
//     data() {
//         return {
//             username: this.username,
//             password: this.password
//         };
//     },
//     methods: {
//         data() {
//             return {
//                 users: [],
//                 username: this.username,
//                 password: this.password
//             };
//         },
//         //Change Here
//         searchTitle() {
//             UserDataService.findByTitle(this.username)
//                 .then(response => {
//                     this.username = response.data.username;
//                     console.log(response.data);
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 });
//         }

//     }
// }
</script>
