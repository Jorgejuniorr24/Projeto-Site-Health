// Menu hamburguer
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('header .menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Calculadora de IMC
document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
  
    let categoria;
    if (imc < 18.5) {
      categoria = 'Baixo peso';
    } else if (imc < 24.9) {
      categoria = 'Peso normal';
    } else if (imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obesidade';
    }
  
    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc} e você está na categoria: ${categoria}`;
  });
  
