<template>
<div v-if="selectUser" class="formContainer">
    <div class="formBox">
        <div class="formClass">
            <form v-if="!submitted" @submit.prevent="selectUser">
                <span class="formHead">
                    User Edit
                </span>
                <p>{{ message }}</p>
                <div>
                    <label for="name"></label>
                    <input class="formInput" v-model="selectUser.name" id="name" type="name" required />
                </div>
                <div>
                    <label for="username"></label>
                    <input class="formInput" v-model="selectUser.username" id="username" type="name" required />
                </div>
                <div>
                    <label for="email"></label>
                    <input class="formInput" v-model="selectUser.email" id="email" type="mail" required />
                </div>
                <div>
                  <label for="password"></label>
                    <input class="formInput" type="password" v-model="selectUser.password" placeholder="Password" autocomplete="off" required />
                </div>
                <div>
                    <button type="submit" @click="deleteUser" class="deleteButton">
                        <span>DELETE</span>
                    </button>

                    <button type="submit" @click="updateUser" class="updateButton">
                        <span>UPDATE</span>
                    </button>
                </div>
            </form>
            <div v-else>
                <h4>You login successfully!</h4>
                <button class="btn" @click="resetPage">Sign Up</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
    name: "user",
    data() {
        return {
            selectUser: null,
            message: ''
        };
    },
    methods: {
        getUser(id) {
            UserDataService.get(id)
                .then(response => {
                    this.selectUser = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateUser() {
            UserDataService.update(this.selectUser.id, this.selectUser)
                .then(response => {
                    console.log(response.data);
                    this.message = 'User edit successfully!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

        deleteUser() {
            UserDataService.delete(this.selectUser.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({
                        name: "users"
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getUser(this.$route.params.id);
    }
};
</script>

<style>
.deleteButton {
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 50%;
    height: 50px;
    color: #fff;
    background-color: #dd0808;
    border-radius: 25px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    margin-top: 30px;
}

.updateButton {
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 50%;
    height: 50px;
    color: #fff;
    background-color: #03920a;
    border-radius: 25px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    margin-top: 30px;
}
</style>
