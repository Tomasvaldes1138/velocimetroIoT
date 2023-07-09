<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit="submitForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" class="form-control" id="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary" @click="submitForm">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'loginComponent',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del formulario
      
      // Realiza la petición POST a la API de inicio de sesión
      axios.post('http://iot.ceisufro.cl:8080/api/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        // Maneja la respuesta de la API
        console.log(response.data);
        const token = response.data.token;
        // Vista de origen
        this.$store.commit('setToken', token);
        router.push('/dashboard');
        // Aquí puedes realizar acciones adicionales con la respuesta, como guardar el token de sesión, redirigir a otra vista, etc.       
      })
      .catch(error => {
        // Maneja el error de la petición
        console.error(error);
      });
    }
  },
};
</script>

<style>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
