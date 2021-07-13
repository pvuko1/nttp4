<template>
  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Componente Http</h2>
      <hr />

      <button class="btn btn-danger my-3 mr-3" @click="getPostsCb()">
        Pedir XMLHttpRequest
      </button>
      <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()">
        Pedir FETCH
      </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">
        Pedir AXIOS
      </button>

      <!-- <pre>{{ posts }}</pre> -->

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <!-- encabezado de la tabla -->
          <tr>
            <th v-for="(col, index) in getCols" :key="index">{{ col }}</th>
            <!-- <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th> -->
          </tr>
          <!-- filas con los datos -->
          <tr v-for="(post, index) in posts" :key="index">
            <td v-for="(col, index) in getCols" :key="index">
              {{ post[col] }}
            </td>
            <!-- <td>{{post.userId}}</td>
            <td>{{post.id}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td> -->
          </tr>
        </table>

        <h4 class="alert alert-primary">
          Se encontraron {{ posts.length }} datos
        </h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos</h4>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60ecc0d1a78dc700178adc26.mockapi.io/api/datosTP/datosAleatorios',
        posts : []

      }
    },
    methods: {

      /* --------------------------------------------------------------- */
      /*              AJAX: Asynchronous Javascript And XML              */
      /* --------------------------------------------------------------- */

      /* ------ AJAX: XMLHttpRequest ------ */
      getPostsCb() {
        //creo la instancia de comunicación asincrónica AJAX con XMLHttpRequest
        let xhr = new XMLHttpRequest
        //configuro dicha instancia
        xhr.open('get',this.url)
        //registro el evento de fin de la comunicación
        xhr.addEventListener('load', () => {
          //la comunicación finalizó en forma exitosa
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        //envío la petición al servidor
        xhr.send()
      },

      /* ------ AJAX: FETCH ------ */
      getPostsFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH',respuesta)
            this.posts = respuesta
          })
          .catch(error => console.error(error))
      },

      /* ------ AJAX: AXIOS ------ */
      //https://github.com/axios/axios
      //https://www.npmjs.com/package/axios
      //https://www.npmjs.com/package/vue-axios
      //npm i axios vue-axios
      getPostsAxios() {
          this.axios(this.url)
          .then( respuesta => {
            console.log('AXIOS', respuesta.data)
            this.posts = respuesta.data
          })
          .catch(error => console.error(error))
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}
</script>

<style scoped lang="css">
.src-componentes-http {
}

.jumbotron {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+17,52b152+33,008a00+67,005700+83,002400+100;Green+3D+%231 */
  background: rgb(180, 221, 180); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(180, 221, 180, 1) 0%,
    rgba(131, 199, 131, 1) 17%,
    rgba(82, 177, 82, 1) 33%,
    rgba(0, 138, 0, 1) 67%,
    rgba(0, 87, 0, 1) 83%,
    rgba(0, 36, 0, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(180, 221, 180, 1) 0%,
    rgba(131, 199, 131, 1) 17%,
    rgba(82, 177, 82, 1) 33%,
    rgba(0, 138, 0, 1) 67%,
    rgba(0, 87, 0, 1) 83%,
    rgba(0, 36, 0, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(180, 221, 180, 1) 0%,
    rgba(131, 199, 131, 1) 17%,
    rgba(82, 177, 82, 1) 33%,
    rgba(0, 138, 0, 1) 67%,
    rgba(0, 87, 0, 1) 83%,
    rgba(0, 36, 0, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */

  background: rgb(180, 221, 180); /* Old browsers */
  color: white;
}

hr {
  background-color: #fff;
}
</style>