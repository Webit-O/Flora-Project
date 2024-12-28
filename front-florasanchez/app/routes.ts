import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('sobre-mi', 'routes/about.tsx'),
  route('servicios', 'routes/services.tsx'),
  ...prefix('servicios', [
    route('box', 'routes/box.tsx'),
    route('salud', 'routes/health.tsx'),
    route('nutricion', 'routes/nutrition.tsx'),
  ]),
  route('contacto', 'routes/contact.tsx'),
  route('faq', 'routes/faq.tsx'),
] satisfies RouteConfig

/* TODO1: Estudiar la forma de la rutas de servicios. Se puede crear un layout para esas rutas */
