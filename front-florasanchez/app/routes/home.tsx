import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Flora Sanchez | Inicio | Entrenamientos y Nutirición' },
    {
      name: 'description',
      content:
        'Flora Sánchez, entrenadora y nutricionista en Las Palmas de Gran Canaria, te ayuda a mejorar tu rendimiento deportivo y salud. Especialista en nutrición deportiva, dietética y entrenamientos personalizados.',
    },
  ]
}

export default function Home() {
  return (
    <>
      <h1>Hola</h1>
      <p>Esto es una prueba</p>
    </>
  )
}
