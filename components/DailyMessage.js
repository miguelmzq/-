import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Mi princesita linda, yo se que quizas no son los mejores dias, esto solo puede hacerte mas fuerte y una persona con mas empatia en el corazon, no estas sola, Te amo mucho",
    "Recuerda niña linda, no eres defina por alguna nota, actitud, o comentario, tu te defines por quien eres y que haces al respecto para mejorar",
    "Y cuando menos te lo esperes, algun dia te daras cuenta que a veces son solo malos momentos y que todo paso por algo, Diosito tiene un plan para ti",
    "Cuando no puedas con tantas cosas, no dudes en llamarme, este donde este, te contestare (si estoy ocupado quizas demore max 10 min en devolver la llamada)",
    "Perdoname por mis errores, perdon por no siempre entenderte, sabes que siempre lo intento, perdon por a veces necesitar un respiro cuando discutimos, a veces me da miedo decirte algo hiriente y hacerte daño",
    "Si te digo princesita, no pienso en que dependes de un principe, sino pienso en que eres como una princesa fuerte, valiente, muy hermosa e inteligente, eso me hace amarte más cada dia",
    "El orden hace la limpieza mental, empieza por lo mas dificil, para al final del dia, tener cosas sencillas que resolver",
    "Te gustaría que de vez en cuando fuera más romantico? o quizas más serio? Quiero que sientas que siempre no solo te amo, sino me interesas y me gustas, tanto en personalidad como en fisico",
    "Hoy y siempre somos un equipo mi amorcito, y si lees esto, me debes 1 hamburguesa, 1 helado y galletas, besos y abrazos, por ser tu compañero :)",
    "Puedes ser la persona más fuerte del mundo, pero no estas sola, me tienes a mi, a tu familia y a tus mejores amigas"
  ];

  const [currentMessage, setCurrentMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const getDailyMessage = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const messageIndex = dayOfYear % messages.length;
    return messages[messageIndex];
  };

  const handleClick = () => {
    if (!showMessage) {
      setCurrentMessage(getDailyMessage());
    }
    setShowMessage(!showMessage);
  };
 
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative z-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">💓</h1>
      
      {showMessage ? (
        <div className="bg-pink-100 rounded-lg p-6 mb-6">
          <p className="text-gray-800 text-lg">{currentMessage}</p>
        </div>
      ) : (
        <div className="h-24 flex items-center justify-center mb-6">
          <p className="text-gray-400 text-center">Presiona el botón para ver tu mensaje del día</p>
        </div>
      )}
      
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        {showMessage ? 'Ocultar Mensaje' : 'Mensaje del Día'}
      </button>
    </div>
  );
};

export default DailyMessage;