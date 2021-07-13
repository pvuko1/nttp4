<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-info px-5">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link class="nav-link" to='/formulario'>Formulario</router-link>
          </li>
        
        <li class="nav-item">
            <router-link to="/http">
              <a class="nav-link" href="/mockIo">MockIo</a>
            </router-link>
          </li>
          
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
    .navbar{
    padding: 2rem;
}


</style>
