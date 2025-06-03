document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth < 768) {
    const tables = document.querySelectorAll("table");
    tables.forEach(table => {
      const headers = Array.from(table.querySelectorAll("th")).map(th => th.textContent);
      table.querySelectorAll("td").forEach((td, i) => {
        td.setAttribute("data-label", headers[i % headers.length]);
      });
    });
  }
});