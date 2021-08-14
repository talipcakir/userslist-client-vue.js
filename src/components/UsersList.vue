<template>
<div class="users">
    <div class="tableStyle">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search User" v-model="user" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="searchUser">
                    Search
                </button>
            </div>
        </div>
    </div>
    <table class="tableStyle">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>E-Mail</th>
                <th>Edit User</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <router-link :to="'/users/' + user.id">Edit</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
    name: "users-list",
    data() {
        return {
            users: [],
            currentIndex: -1,
            user: ""
        };
    },
    methods: {
        retrieveUsers() {
            UserDataService.getAll()
                .then(response => {
                    this.users = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveUsers();
            this.currentIndex = -1;
        },

        setActiveUser(user, index) {
            this.currentIndex = index;
        },
        searchUser() {
            UserDataService.findByUser(this.user)
                .then(response => {
                    this.users = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveUsers();
    }
};
</script>
