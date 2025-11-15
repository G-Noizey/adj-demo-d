const API = `${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}${import.meta.env.VITE_API_BASE}`;

const TestController = {

  callToAPI: async () => {
    try {
      const res = await fetch(`${API}/test`);
      const data = await res.json();
      console.log("DATA:", data);
      alert("API respondió correctamente. Revisa consola.");
    } catch (e) {
      console.error("Error en la petición:", e);
    }
  }

};

export default TestController;
