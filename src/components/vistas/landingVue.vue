<template>
  <div class="landing-page">
    <div class="sidebar d-flex flex-column">
      <button class="btn btn-primary mb-2">Login</button>
      <button class="btn btn-primary">Sign Up</button>
    </div>
    <div class="content">
      <img src="https://assets.ey.com/content/dam/ey-sites/ey-com/es_es/topics/ey-mobility-center/ey-man-cycling.jpg" alt="Imagen" class="cover-image" />
      <p>Tu texto aquí</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingVue'
}
</script>

<style>
.landing-page {
  display: flex;
  height: 100vh; /* Establece la altura del contenedor al 100% del viewport */
}

.sidebar {
  width: 200px;
  background: #f2f2f2;
  padding: 20px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  position: relative; /* Establece la posición relativa para que la imagen absoluta se ajuste a este contenedor */
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la imagen para cubrir todo el espacio disponible */
}
</style>