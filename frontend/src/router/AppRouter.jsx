import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home/Home'
import { AboutMe } from '../pages/AboutMe/AboutMe'
import { Services } from '../pages/Services/Services'
import { Box } from '../pages/Box/Box'
import { Health } from '../pages/Health/Health'
import { Nutrition } from '../pages/Nutrition/Nutrition'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre-mi' element={<AboutMe />} />
      <Route path='/servicios' element={<Services />} />
      <Route path='/servicios/box' element={<Box />} />
      <Route path='/servicios/salud' element={<Health />} />
      <Route path='/servicios/nutricion' element={<Nutrition />} />
    </Routes>
  )
}

export default AppRouter
