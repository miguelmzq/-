import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Te extraño mi amor, cuando nos vemos? (salida pendiente por este mensaje) ",
    "Cupon valido para que pidas lo que quieras sin que yo me refute, no incluye cosas materiales.",
    "Cupon valido para un favor que no crees que haria",
    "Cupon valido para 1 beso, te recomiendo cuando quizas sea necesario",
    "Te amo hoy y siempre",
    "A veces me gustarían hacer cosas que normalmente no hacemos, tipo seria bonito (conversación en wssp)",
    "A veces siento que hay muchas cosas que no nos decimos en su momento o cuando algo nos incomoda",
    "Gracias por darme tanta vida y amor, te amo",
    "amo que me pongas nervioso a veces",
    "si lees esto mandanme una ss a wssp y te tengo algo preparado",
    "Cupon valido para un dia en el que yo te atienda por completo (vengas a mi casa)",
    "un chiste si m mandas esto a wssp",
    "otro chiste si m mandas esto por wssp",
    "Siento que a veces tenemos que probar cosas nuevas, tipo nuevos juegos, nuevas cositas, para que algunas cosas de nuestra rela no sean taan rutinarias, igual amo todo contigo",
    "te amo mi amor, muchisimo, gracias por ser parte de mi vida y espero siempre te sientas amada por mi, porque asi es"
  
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