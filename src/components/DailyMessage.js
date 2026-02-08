import React, { useState } from 'react';

const DailyMessage = () => {
  const messages = [
    "Mi amorcito lindo precioso espero tengas un lindo dia, recuerda respirar y lo privilegiada que eres",
    "Amor, no dejes que algo te defina, asi sea una nota, el peso o algun error, vales tanto y te amo tanto, espero notes tu valor mi amorcito",
    "Hoy sera un buen dia, un gran dia, un buen dia, recuerda todo es mental e iniciar el dia con algun problema no define que es un mal dia",
    "Un chisteson pa ti majoncho, que te diria un perro a ti, si t viera con mis ojos, Guauuuu eres super linda",
    "Perdoname por mis errores, se que con ellos te puedo lastimar, me gustaria que siempre m dijeses las cosas especificamente que quieres que yo cambie, para tener una idea clara",
    "Si te digo princesita, no pienso en que dependes de un principe, sino pienso en que eres como una princesa fuerte, valerosa, muy hermosa e inteligente, eso me hace amarte más cada dia",
    "Si andas muy estresada, busca ordenarte, distraerte y enfocarte, siempre estoy yo para ti, tu puedes amor.",
    "Te gustaría que de vez en cuando fuera más romantico? o quizas más serio? Quiero que sientas que siempre no solo te amo, sino me interesas y me gustas, tanto en personalidad como en fisico",
    "Hoy y siempre somos un equipo mi amorcito, y si lees esto, me debes 1 hamburguesa, 1 helado y galleta, besos y abrazos, por ser tu compañero :)",
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