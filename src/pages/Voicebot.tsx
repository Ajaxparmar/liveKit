// pages/voicebot.js
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';



const VoiceBot = () => {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);

  const handleVoiceClick = () => {
    setIsListening(!isListening); // Toggle listening state
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen text-white"
      style={{
        background: 'radial-gradient(circle at center, #0c0f1f, #000000 80%)',
      }}
    >
      {/* Top Navigation with Try Premium in Menu on Mobile */}
      <div className="absolute top-5 left-5 flex space-x-4 bg-gray-800 bg-opacity-60 rounded-full px-6 py-2">
        <button onClick={() => router.push('/')} className="text-xs md:text-sm text-gray-300 hover:text-white">
          Home
        </button>
        <button onClick={() => router.push('/pricing')} className="text-xs md:text-sm text-gray-300 hover:text-white">
          Pricing
        </button>
        <button onClick={() => router.push('/about')} className="text-xs md:text-sm text-gray-300 hover:text-white">
          About Us
        </button>

        {/* Try Premium Button for Mobile with Same Style and Color */}
        <button
          onClick={() => router.push('/premium')}
          className="text-xs md:text-sm font-medium text-white rounded-full px-4 py-2 shadow-lg md:hidden"
          style={{
            background: 'linear-gradient(to right, #aa00ff, #ff007f)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          Try Premium
        </button>
      </div>

      {/* Premium Button for Desktop */}
      <button
        className="absolute top-5 right-5 px-4 py-2 text-xs md:text-sm font-medium text-white rounded-full shadow-lg hidden md:block"
        style={{
          background: 'linear-gradient(to right, #aa00ff, #ff007f)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
        onClick={() => router.push('/premium')}
      >
        Try Premium
      </button>

      {/* Title and Voice Command Badge */}
      <br></br>
      <div className="text-center mt-16">
        <div className="inline-block px-4 py-1 mb-2 text-xs md:text-sm font-medium bg-gray-800 bg-opacity-70 rounded-full">
          AI Voice Command
        </div>
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
          Effortless control<br />with Milla 2.0
        </h1>
      </div>

      {/* Transcript Box with Full Height */}
      <div
        className="flex-grow mt-10 w-4/5 max-w-lg px-6 py-4 rounded-lg bg-gray-800 bg-opacity-50 text-gray-200 overflow-y-auto"
        style={{
          backdropFilter: 'blur(8px)',
          maxHeight: '60vh', // Set max height for the transcript box
        }}
      >
        <h2 className="text-base md:text-lg font-semibold mb-2">Transcript</h2>
        <p className="text-xs md:text-sm">
          {/* Placeholder for transcript content */}
          This is where the voice transcription will appear. Start speaking by pressing the microphone.
        </p>
      </div>

      {/* Voice Button near Start Conversation */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handleVoiceClick}
          className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-2xl"
        >
          <FontAwesomeIcon icon={faMicrophone} size="2x" />
          {isListening && (
            <div className="absolute inset-0 w-full h-full animate-ping rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 opacity-50"></div>
          )}
        </button>
      </div>

      {/* Start Conversation Button */}
      <button
        className="mt-2 mb-4 px-6 py-3 text-xs md:text-sm font-medium text-white rounded-full shadow-lg border border-purple-400"
        style={{
          background: 'linear-gradient(to right, #aa00ff, #ff007f)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
        onClick={() => console.log('Start Conversation')}
      >
        Start Conversation
      </button>
    </div>
  );
};

export default VoiceBot;
