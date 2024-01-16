<template>
    <main>
        <h1>Login</h1>
        <form action="login" method="post" @submit.prevent="login">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" v-model="username" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref('')
const password = ref('')

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, username.value, password.value)
        console.log(`Logged in as ${userCredential.user.email}`)
        router.push('/')
    } catch (err) {
        console.error(`Could not login:`, err)
        alert(err)
    }
}
</script>