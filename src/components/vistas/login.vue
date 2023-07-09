<template>
    <div class="login-form">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </template>
  
  <style>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  