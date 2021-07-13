export default {
    name: "src-componentes-formulario",
    components: {},
    props: [],
    
    data() {
      return {
        formData: this.getInicialData(),
        formState: {},
        nombreLengthMin: 5,
        nombreLengthMax: 15,
        edadMin: 18,
        edadMax: 120,
        registros: [],
        colorDeFondo : this.colorCondicional(),
      };
    },
    computed: {},
    mounted() {},
    methods: {
      getInicialData() {
        return {
          nombre: "",
          edad: "",
          email: "",
        };
      },
  
      enviar() {
        console.log({ ...this.formData });
        this.formState._reset();
        this.insertarRegistro({...this.formData});
        this.formData = this.getInicialData();
      },
      
      

      insertarRegistro(data){
          console.log(data)
          let registro =  { 
              nombre: data.nombre,
              edad: data.edad,
              email: data.email,
              dia: this.obtenerFecha().getDay(),
              mes: this.obtenerFecha().getMonth(),
              anio: this.obtenerFecha().getFullYear(),
              horas: this.obtenerFecha().getHours(),
              minutos: this.obtenerFecha().getMinutes(),
              segundos: this.obtenerFecha().getMinutes(),
          }
          console.log(registro.fecha)
          this.registros.push(registro)

      },
      
      obtenerFecha(){
        var currentdate = new Date()
        return currentdate
      },

      getEstilos() {
        return {
          'background-color': this.colorDeFondo,
          color : this.registroTotal >= this.presupuesto ? 'red' : 'white'
        }
      },

      colorCondicional() {
        var color;
        if (this.registroTotal < this.registroBajo) {
          color = 'green'
        } else if (this.registroTotal < this.registroAlto && this.registroTotal >= this.registroBajo ) {
          color = 'magenta'
        } else if (this.registroTotal > this.registroMedio) {
          color = 'orange'
        }
        return color
      },

      
      
    },
  };
