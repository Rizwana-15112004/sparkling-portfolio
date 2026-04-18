import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LottieAnimation = () => {
  return (
    <div className="w-full max-w-[450px] aspect-square flex items-center justify-center p-8 bg-card/30 backdrop-blur-sm rounded-3xl border border-border shadow-2xl relative group overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 -z-10" />
      
      <DotLottieReact
        src="https://raw.githubusercontent.com/saadpasta/developerFolio/master/src/assets/lottie/codingPerson.json"
        loop
        autoplay
        className="w-full h-full"
      />
      
      {/* Decorative frame */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
      <div className="absolute top-4 left-4 flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 rounded-full bg-destructive" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    </div>
  );
};
