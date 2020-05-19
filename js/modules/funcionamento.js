export default function initFuncionamento() {
  const operation = document.querySelector('.funcionamento');
  const daysWeek = operation.dataset.semana.split(',').map(Number);
  const hourWeek = operation.dataset.horario.split(',').map(Number);

  const dateNow = new Date();
  const openWeek = daysWeek.indexOf(dateNow.getDay()) !== -1;
  const OpenHour =
    dateNow.getHours() >= hourWeek[0] && dateNow.getHours() < hourWeek[1];

  if (openWeek && OpenHour) {
    operation.classList.add('active');
  }
}
