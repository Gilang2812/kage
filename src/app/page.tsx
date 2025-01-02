'use client'
import { useTheme } from "next-themes";

 
export default function Home() {
  const {theme,setTheme} = useTheme() 
  return (
   <div className="bg-secondary">
    <p className="text-primary">hello world</p>
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-4 py-2 bg-gray-200 text-secondary  rounded border-primary border-2 bg-primary"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
    <a 
      className="px-4 py-2 w-fit bg-gray-200 text-secondary   rounded border-primary border-2 bg-primary"
      href="/home">Home</a>
    <a
      className="px-4 py-2 w-fit bg-gray-200 text-secondary  rounded border-primary border-2 bg-primary"
      href="/home">Keberlanjutan</a>
   </div>
  );
}
