En MkDocs es posible...

Insertar imágenes con enlaces

[![alt text](image.png)](https://github.com/)

Insertar bloques de código

    i = i + 1

Insertar tablas

| Lenguaje | Tipo        | Año |
|----------|-------------|-----|
| Python   | Interpretado| 1991|
| Rust     | Compilado   | 2010|
| HTML     | Marcado     | 1993|

Insertar código css

<button id="boton-css" style="background-color:#4CAF50; color:white; padding:10px 24px; border:none; border-radius:4px; cursor:pointer;">
  Botón CSS
</button>

Insertar código JavaScript

<table id="tabla-js" border="1" style="border-collapse:collapse;">
  <thead>
    <tr>
      <th>Lenguaje</th>
      <th>Tipo</th>
      <th>Año</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
<script>
  const datos = [
    { lenguaje: "Python", tipo: "Interpretado", año: 1991 },
    { lenguaje: "Rust", tipo: "Compilado", año: 2010 },
    { lenguaje: "HTML", tipo: "Marcado", año: 1993 }
  ];
  const tbody = document.querySelector("#tabla-js tbody");
  function renderTabla() {
    tbody.innerHTML = "";
    datos.forEach(fila => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${fila.lenguaje}</td><td>${fila.tipo}</td><td class="anio">${fila.año}</td>`;
      tbody.appendChild(tr);
    });
  }
  renderTabla();

  document.getElementById("boton-css").onclick = function() {
    datos.forEach(fila => {
      fila.año = Math.floor(Math.random() * (2025 - 1950 + 1)) + 1950;
    });
    renderTabla();
  };
</script>