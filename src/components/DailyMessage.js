import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Me gustas muchisimo amor",
    "Hoy te quiero dedicar una cancion amor",
    "Insetar texto",
    "Personalmente admiro tu fuerza y dedicacion amor",
    "Hoy estare cansado, es un predict",
    "Te extraño amor, cuando nos vemos??",
    "Si lees esto me debes 100000 soles y un abrazo amor",
    "tengo sueño, en momentos asi quiesiera que estemos abrazaditos",
    "Tengo una sorpresa para ti, si lees esto puede ser que te la diga, pero es a futuro, todavia no aprendo algo que necesito",
    "lorem ipsum dolor sit amet",
    "Te amooooooooooooooooo mucho",
    "Cuál es la diferencia entre un argentino y una vaca? Que la vaca da leche y el argentino dale che",
    "Que le dice una barra de pan a otra? te presento a una miga",
    "Amor tu sabes porque los gatos no van a las discotecas? porque le tienen miedo al perreo",
    "Si estos dias no te ha gustado como te sientes contigo misma, fisica o emocionalmente, hoy haz algo para cambiarlo, pequeños actos hacen grandes cambios amor",
    "No estas sola mi amor siempre habra un fantasma en debajo de tu cama."
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