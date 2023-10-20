const url = "https://api.openweathermap.org/data/2.5/weather?lat=-31.5375000&lon=-68.5363900&appid=ce132422407520023eecdc10f18d3e1c";

const {createApp} = Vue;
const apiKey = 'e84839573bc1420797d5fadbf44b3397';

createApp({
    data() {
    return {
      ciudad: '',
      estado: '',
      pais: '',
      clima: null
    };
    },
    methods: {
      async buscarUbicacionYClima() {
        // Restablecer this.clima a null al iniciar una nueva búsqueda
        this.clima = null;
        try {
          // Paso 1: Obtener coordenadas geográficas de la API Geo
          const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${this.ciudad},${this.estado},${this.pais}&limit=1&appid=${apiKey}`;
          const geoResponse = await fetch(geoUrl);
          const geoData = await geoResponse.json();

          if (geoData.length > 0) {
            const latitud = geoData[0].lat;
            const longitud = geoData[0].lon;

            // Paso 2: Obtener datos meteorológicos de la API de datos meteorológicos
            const climaUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}`;
            const climaResponse = await fetch(climaUrl);
            this.clima = await climaResponse.json();
          } else {
            console.log('Ubicación no encontrada.');
          }
        } catch (err) {
          console.error('Algo salió mal:', err);
        }
      }
    }
  }).mount('#app');