import React, { useState } from 'react';
import { generateCuteIcon } from '../services/geminiService';
import { Wand2, Loader2, Download, RefreshCcw } from 'lucide-react';

interface IconGeneratorProps {
  onIconGenerated?: (url: string) => void;
}

export const IconGenerator: React.FC<IconGeneratorProps> = ({ onIconGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const imageUrl = await generateCuteIcon(prompt);
      setGeneratedImage(imageUrl);
      if (onIconGenerated) {
        onIconGenerated(imageUrl);
      }
    } catch (err) {
      setError("Oops! Couldn't make the magic happen. Try again?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-cute-pink max-w-md w-full mx-auto relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cute-beige rounded-full opacity-50 blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cute-pink rounded-full opacity-50 blur-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
            <Wand2 className="w-6 h-6 text-cute-dark" />
            <h3 className="text-xl font-fredoka font-bold text-cute-text">Magic Icon Maker</h3>
        </div>
        
        <p className="text-sm mb-4 text-cute-text/80">
          Want a new cute avatar? Describe it below and let the AI draw it for you!
        </p>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., a sleepy mushroom, a happy cat..."
              className="w-full px-4 py-3 rounded-xl bg-cute-cream border-2 border-transparent focus:border-cute-dark outline-none transition-all placeholder:text-cute-text/40 text-cute-text"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !prompt}
            className="w-full py-3 bg-cute-dark text-white font-fredoka font-bold rounded-xl hover:bg-[#E5C0A6] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Dreaming up your icon...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Generate Cuteness!
              </>
            )}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-400 text-sm font-bold text-center bg-red-50 p-2 rounded-lg">
            {error}
          </p>
        )}

        {generatedImage && (
          <div className="mt-6 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-inner border-4 border-cute-beige bg-white mb-4">
              <img src={generatedImage} alt="Generated Icon" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 w-full">
                <a 
                    href={generatedImage} 
                    download={`cute-icon-${Date.now()}.png`}
                    className="flex-1 py-2 px-4 bg-cute-beige text-cute-text font-bold rounded-xl hover:bg-opacity-80 transition-all text-center flex items-center justify-center gap-2 text-sm"
                >
                    <Download className="w-4 h-4"/> Save
                </a>
                <button 
                    onClick={() => { setGeneratedImage(null); setPrompt(''); }}
                    className="flex-1 py-2 px-4 bg-cute-pink text-cute-text font-bold rounded-xl hover:bg-opacity-80 transition-all text-center flex items-center justify-center gap-2 text-sm"
                >
                    <RefreshCcw className="w-4 h-4"/> New
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
