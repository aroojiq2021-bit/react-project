import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const courses=[
    {title:'Web development',desc:"Learn web development if u want to" ,btn:"Learn More" ,img: "./code.webp"},
    {title:"SEO" ,desc :"Learn SEO if u want to" ,btn:"Learn More",img:"https://static.vecteezy.com/system/resources/thumbnails/026/268/060/small/business-people-use-seo-tools-unlocking-online-potential-boost-visibility-attract-organic-traffic-and-dominate-search-engine-rankings-with-strategic-optimization-techniques-digital-marketing-photo.jpg" },
    {title:"CEH" ,desc :"Learn CEH if u want to",btn:"Learn More",img:"https://www.shutterstock.com/image-vector/certified-ethical-hacker-ceh-icon-600nw-1952200375.jpg"}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Welcome to React js</h1>
      <div>
      {services.map((service)=>(
        <Card title={service.title} desc={service.desc}/>
      ))}
      </div>
      </div>
    </>
  )
}

export default App
