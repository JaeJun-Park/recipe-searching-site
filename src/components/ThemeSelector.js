import './ThemeSelector.css'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor } = useTheme()

  return (
    <div className="theme-selector">
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
