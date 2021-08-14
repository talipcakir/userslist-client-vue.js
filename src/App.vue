<template>
<div id="app">
    <nav id="nav">
        <router-link to="/" class="li">Home</router-link>
        <router-link to="/users" class="li">Users List</router-link>
        <router-link to="/register" class="li">Register</router-link>
        <router-link to="/login" class="li">Login</router-link>
    </nav>

    <div class="container mt-3">
        <router-view />
    </div>
</div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
#nav {
    padding: 10px;
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.li {
    width: 125px;
    height: 30px;
    padding-top: 10px;
    text-align: center;
    min-width: ;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #f56614;
}

#nav a:hover {
    color: #7614f5;
    text-decoration:underline;
    text-decoration-thickness: 5px;
}
.tableStyle {
    width: 95%;
    display: flexbox;
    border-collapse: collapse;
    margin: 20px;
    font-size: 0.9em;
    list-style-type: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.tableStyle thead tr {
    background-color: #074096;
    color: #ffffff;
    align-items: center;
}

.tableStyle th,
.tableStyle td {
    padding: 12px 15px;
}

.tableStyle tbody tr {
    border-bottom: 1px solid #dddddd;
}

.tableStyle tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}
div {
    display: block;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input {
    outline: none;
    border: none;
}

button {
    outline: none !important;
    border: none;
}

.formClass {
    width: 100%;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    display: block;
    padding-top: 150px;
}

.formContainer {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
}

.formBox {
    width: 500px;
    border-radius: 20px;
    overflow: hidden;
}

.formHead {
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #074096;
    padding-top: 50px;
    padding-bottom: 39px;
}

.formInput {
    font-size: 15px;
    color: #1b3815;
    line-height: 1.2;
    position: relative;
    display: block;
    width: 100%;
    height: 55px;
    margin-top: 30px;
    background: #ebebeb;
    border-radius: 27px;
    padding: 0 35px;
}

.formButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #074096;
    border-radius: 25px;
    font-size: 15px;
    line-height: 1.2;
    text-transform: uppercase;
    margin-top: 30px;
}
</style>