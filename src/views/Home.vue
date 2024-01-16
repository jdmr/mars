<template>
    <main>
        <h1>Home</h1>
        <h2 v-if="user">Hello {{ user.email }}</h2>
        <RouterLink v-if="!user" to="/login">Login</RouterLink>
        <button v-if="user" @click="logout">Logout</button>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

const router = useRouter()
const user = ref(auth.currentUser)
const logout = async () => {
    try {
        await auth.signOut()
        user.value = null
        console.log('Logged out')
        router.replace('/login')
    } catch (err) {
        console.error(`Could not logout:`, err)
    }
}
</script>