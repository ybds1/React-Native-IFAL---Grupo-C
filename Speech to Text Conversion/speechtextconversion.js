import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
  const {
    transcript,
    listening,
    reiniciarTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Diga algo sobre o Ifal: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.comecarListening}>Falar</button>
      <button onClick={SpeechRecognition.pararListening}>Parar</button>
      <button onClick={reiniciarTranscript}>Reiniciar</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;
