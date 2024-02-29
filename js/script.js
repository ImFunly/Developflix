import peliculas from "./peliculas.js";

//console.log(peliculas);

document.addEventListener("DOMContentLoaded", function () {
  function crearElementoPelicula(pelicula) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("pelicula");

    const imagen = document.createElement("img");
    imagen.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path;
    imagen.alt = pelicula.title;

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;

    contenedor.appendChild(imagen);
    contenedor.appendChild(titulo);

    return contenedor;
  }

  const generos = {
    28: "genero-28",
    53: "genero-53",
    12: "genero-12",
  };

  peliculas.forEach((pelicula) => {
    pelicula.genre_ids.forEach((genreId) => {
      const contenedorGenero = document.getElementById(generos[genreId]);
      if (contenedorGenero) {
        const elementoPelicula = crearElementoPelicula(pelicula);
        contenedorGenero.appendChild(elementoPelicula);
      }
    });
  });
});
