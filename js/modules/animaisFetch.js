import initNumeros from './numeros.js';

export default function initAnimaisFetch() {
  const numerosAnimais = document.querySelector('.numeros-grid');

  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      resJson.forEach((item) => {
        const div = createAnimais(item);
        numerosAnimais.appendChild(div);
      });
      initNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('../../animais-json.json');
}
