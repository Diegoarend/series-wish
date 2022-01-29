<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header"> 
          Login 
        </div>
        <div class="card-body">
          <div class="form-group">
            <input 
              v-model="form.email"
              required 
              type="email"
              class="form-control" 
              placeholder="E-mail"
            >
          </div>
          <div class="form-group">
            <input
              v-model="form.password"
              required
              type="password"
              class="form-control"
              placeholder="Senha"
            >
          </div>
          <button class="btn btn-primary w-100">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data:() => ({
    form: {
      email:"",
      password:""
    }
  }),
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card{
    width: 30%;
  }
}
</style>