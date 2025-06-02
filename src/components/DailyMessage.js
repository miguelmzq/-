import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Por si no lo sabias, me gustas mucho mi amor.",
    "Amorr, si te sientes ofuscada, tomate tus tiempos y recuerda respirar, Te amo.",
    "Hoy sera un buen dia, un gran dia, un buen dia, recuerda todo es mental.",
    "Recuerda mantener la cabeza fria en decisiones, tu puedes con todo.",
    "Hoy espero tengas/hayas tenido un buen dia y perdon si no estuve presente o te incomodo algo de mi.",
    "Amor, sabes veces simplemente pienso y digo, bacan ah JAJAJAJA.",
    "Si andas muy estresada, busca ordenarte, distraerte y enfocarte, tu puedes amor.",
    "Te gustaría que de vez en cuando fuera más romantico?",
    "Si hay algo que te incomode o moleste de mi, considero que deberia saberlo para que mejoremos juntos.",
    "Recuerda siempre que somos un equipo, no estas sola y tampoco lo estaras."
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