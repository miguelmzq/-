import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "amorr nuevamente te quiero dedicar una canción",
    "A pesar que seas una pava, te amo",
    "Siempre recuerda lo mucho que vales, lo inteligente que eres y lo feliz que haces al resto",
    "Estoy orgulloso de ti amorr",
    "Hoy sacaremos prime a pesar de todas las dificultades",
    "mi amorr te extrañooooo, cuando nos vemos??",
    "Si lees esto te debo algo no material y tu me deebes galletas, aceptas amor?,
    "Eres muy fuerte y si podras encontrar solucion a lo que te propongas",
    "My sweet lord, ooohh my lord, my sweet lord, aleluyaaa",
    "tengo chismesito jejeje",
    "Te amo de aqui hasta el inicio del universo",
    "chistesito para alegrar el dia: cual es la diferencia entre un argentino y una vaca? que el argentino dice dalee che y la vaca da leche",
    "Que le dice una barra de pan a otra? te presento a una miga",
    "Esto que hay en mi interiorr es mágicooo, te amo por hacer que me guste Soy Luna",
    "amor, si estas enojada o frustrada, busca enfocar eso en cosas buenas, yo se que tu puedes"
  
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