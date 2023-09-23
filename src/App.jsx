import  { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App () {
  const [ themeMode, setThemeMode ] = useState('light')

  // methods name  should be same as data
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  // actual change in theme
  useEffect(() => {
   document.querySelector('html').classList.remove('light' , 'dark')
   document.querySelector('html').classList.add(themeMode)

  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>   {/* access values */}
  
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App



