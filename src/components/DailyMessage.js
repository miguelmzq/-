import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Cuando te sientas sola, no dudes en llamarme, dimelo y estaremos solos los 2 amor",
    "Gracias por a veces ser más que mi enamorada, quien siempre me escucha y esta ahi",
    "un clashhh solo por ver esto",
    "Y cuando no haya una amiga para un tiktok, maquillarse o cualquier cosa, me tienes a mi para hacerlo (cupon valido para 2 veces al siglo",
    "Te quiero hoy y siempre, pero más que quererte, es amor por ti",
    "De verdad debemos tomarnos fotos, tengo muchas ganas de tener 80000 fotos contigo",
    "Amor recuerda respirar, tomar tu aguita y tomarte tus espacios",
    "Eres mi brainrot favorito, amorsini estresini favoritini",
    "cupon valido para que te cocine",
    "flores flores flores, ella sabia que el sabia",
    "Cupon valido para un dia en el que yo te atienda por completo (vengas a mi casa) SIGUE PENDIENTEEE",
    "Por favor, inserte su mensaje",
    "Code Error [498] please try later",
    "Este ciclo el que saca mejor nota en promedio de los Generales, le debe una buena hamburguesa al otro",
    "siempre te voy a elegir a ti, eres mi numero 1 en cualquier lista"
  
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