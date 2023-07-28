function habilitarModoInclusivo() {
    const body = document.body;
    const button = document.getElementById('btnInclusivo');
  
    if (body.style.backgroundColor === '' || body.style.backgroundColor === 'white') {
      body.style.backgroundColor = '#333'; 
      body.style.color = '#fff'; 
      button.textContent = 'Desactivar Modo Inclusivo';
    } else {
      body.style.backgroundColor = 'white'; 
      body.style.color = '#333'; 
      button.textContent = 'Activar Modo Inclusivo';
    }
  }


  function mostrarDatosCreador() {
    const creador = {
      nombre: "Eduardo Gullino",
      edad: 16,
      nivel: "secundario",
      contacto: "edugullino@gmail.com"
    };
  
    const mensaje = `Nombre: ${creador.nombre}\nEdad: ${creador.edad}\nNivel: ${creador.nivel}\nContacto: ${creador.contacto}`;
  
    alert(mensaje);
  }
  