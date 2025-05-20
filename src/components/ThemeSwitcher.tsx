
import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from './ui/button';

// Define theme options
const themes = [
  { name: 'default', label: 'Classic', primary: '#ea384c', secondary: '#FDE1D3', tertiary: '#64745E' },
  { name: 'lavender', label: 'Lavender', primary: '#8B5CF6', secondary: '#E5DEFF', tertiary: '#514A7E' },
  { name: 'ocean', label: 'Ocean', primary: '#0EA5E9', secondary: '#D3E4FD', tertiary: '#2C5282' },
  { name: 'sunset', label: 'Sunset', primary: '#F97316', secondary: '#FEC6A1', tertiary: '#7C3AED' },
  { name: 'mint', label: 'Mint', primary: '#10B981', secondary: '#F2FCE2', tertiary: '#365314' },
];

const ThemeSwitcher = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const cycleTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    applyTheme(themes[nextIndex]);
    
    // Show tooltip with theme name
    setIsTooltipVisible(true);
    setTimeout(() => setIsTooltipVisible(false), 2000);
  };

  const applyTheme = (theme: typeof themes[0]) => {
    // Update CSS variables
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--secondary', theme.secondary);
    document.documentElement.style.setProperty('--tertiary', theme.tertiary);

    // Update colors in the HSL format that Tailwind uses
    updateHSLVariable('--primary', theme.primary);
    updateHSLVariable('--secondary', theme.secondary);
  };

  // Convert hex to HSL for Tailwind CSS variables
  const updateHSLVariable = (cssVar: string, hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch(max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      
      h *= 60;
    }
    
    // Update the CSS variable with correct HSL format
    const hue = Math.round(h);
    const saturation = Math.round(s * 100);
    const lightness = Math.round(l * 100);
    
    document.documentElement.style.setProperty(`${cssVar}`, `${hue} ${saturation}% ${lightness}%`);
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <div className="relative">
        <Button 
          onClick={cycleTheme} 
          size="icon"
          variant="outline"
          className="bg-white shadow-lg hover:bg-kraft-secondary hover:text-kraft-primary transition-all duration-300 rounded-full w-12 h-12"
          aria-label="Change theme"
        >
          <Palette size={20} />
        </Button>
        
        {isTooltipVisible && (
          <div className="absolute -top-10 right-0 bg-white text-kraft-dark px-3 py-1 rounded shadow-md animate-fade-in">
            {themes[currentThemeIndex].label} Theme
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
