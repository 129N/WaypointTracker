

import { Icon } from "@iconify/react/dist/iconify.js";

export const ModeChange = ({ 
  darkMode, 
  setDarkMode 
}: { 
  darkMode: boolean; 
  setDarkMode: (mode: boolean) => void 
}) => {
  return (
    <div className="Icon_buttons">
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className={`mode-toggle ${darkMode ? 'dark' : 'light'}`}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <Icon 
          icon={darkMode ? "ri:sun-fill" : "ri:moon-line"} 
          width="30" 
          height="30"
        />
      </button>
    </div>
  );
};

export default ModeChange;