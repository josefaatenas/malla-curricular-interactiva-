const malla = document.getElementById('malla');

for (let i = 0; i < 30; i++) {
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.textContent = `Ramo ${i + 1}`;
  
  celda.addEventListener('click', () => {
    celda.classList.toggle('activa');
  });

  malla.appendChild(celda);
}const malla = document.getElementById('malla');

for (let i = 0; i < 30; i++) {
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.textContent = `Ramo ${i + 1}`;
  
  celda.addEventListener('click', () => {
    celda.classList.toggle('activa');
  });

  malla.appendChild(celda);
}
