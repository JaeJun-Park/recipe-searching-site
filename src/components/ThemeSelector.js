import './ThemeSelector.css'
import modeIcon from '../assets/mode-icon.svg'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { mode, changeColor, changeMode } = useTheme()
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
    console.log(mode)
  }

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img //
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((themeColor) => (
          <div //
            key={themeColor}
            onClick={() => changeColor(themeColor)}
            style={{ background: themeColor }}
          />
        ))}
      </div>
    </div>
  )
}
