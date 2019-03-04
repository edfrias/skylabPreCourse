const questions = [
  { letter: 'a', answer: 'arma', status: 0, question: 'CON LA A. Instrumento o máquina que sirve para atacar o defenderse'},
  { letter: 'b', answer: 'bañarse', status: 0, question: 'CON LA B. Entrar en el agua para lavarse, para nadar o jugar'},
  { letter: 'c', answer: 'cazadora', status: 0, question: 'CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura'},
  { letter: 'd', answer: 'débil', status: 0, question: 'CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia'},
  { letter: 'e', answer: 'edificio', status: 0, question: 'CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc'},
  { letter: 'f', answer: 'futuro', status: 0, question: 'CON LA F. Tiempo que viene después'},
  { letter: 'g', answer: 'grúa', status: 0, question: 'CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro'},
  { letter: 'h', answer: 'hundir', status: 0, question: 'CON LA H. Ir abajo dentro del agua'},
  { letter: 'i', answer: 'isla', status: 0, question: 'CON LA I. Territorio que está rodeado de agua por todas partes'},
  { letter: 'j', answer: 'jugador', status: 0, question: 'CON LA J. Persona que juega'},
  { letter: 'k', answer: 'kilo', status: 0, question: 'CON LA K. Medida para pesar (equivale a mil gramos)'},
  { letter: 'l', answer: 'lata', status: 0, question: 'CON LA L. Envase de metal'},
  { letter: 'm', answer: 'manzana', status: 0, question: 'CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura'},
  { letter: 'n', answer: 'nunca', status: 0, question: 'CON LA N. Ningún día o en ningún tiempo'},
  { letter: 'ñ', answer: 'añoranza', status: 0, question: 'CONTIENE LA Ñ. Echar de menos, nostalgia'},
  { letter: 'o', answer: 'oveja', status: 0, question: 'CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana'},
  { letter: 'p', answer: 'pasear', status: 0, question: 'CON LA P. Andar por placer o para hacer ejercicio'},
  { letter: 'q', answer: 'queso', status: 0, question: 'CON LA Q. Alimento sólido preparado con leche'},
  { letter: 'r', answer: 'resumen', status: 0, question: 'CON LA R. Pocas palabras que cuentan una historia más larga'},
  { letter: 's', answer: 'sandalia', status: 0, question: 'CON LA S. Calzado que no tapa todo el pie'},
  { letter: 't', answer: 'techo', status: 0, question: 'CON LA T. Parte de una habitación que está arriba'},
  { letter: 'u', answer: 'urgente', status: 0, question: 'CON LA U. Que no puede esperar'},
  { letter: 'v', answer: 'veloz', status: 0, question: 'CON LA V. Que es muy rápido'},
  { letter: 'w', answer: 'kiwi', status: 0, question: 'CONTIENE LA W. Fruto comestible, de piel ligeramente vellosa y pulpa de color verde'},
  { letter: 'x', answer: 'oxigenar', status: 0, question: 'CONTIENE LA X. Airearse, respirar el aire libre'},
  { letter: 'y', answer: 'yegua', status: 0, question: 'CONTIENE LA Y. Hembra del caballo'},
  { letter: 'z', answer: 'zarpar', status: 0, question: 'CON LA Z. Empezar a navegar'},
];

let marcador = 0;

for (let quest of questions) {
  let makeQuestion = prompt(quest.question);
  if (makeQuestion === 'pasapalabra') {
    console.log('End of the game!');
  } else if (makeQuestion === quest.answer) {
    marcador += 1;
  } else {
    console.log('fail!');
  }
}

console.log('marcador >', marcador);
