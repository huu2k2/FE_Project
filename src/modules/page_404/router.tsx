import { RouteObject } from 'react-router-dom'
import { NotFoundPage } from './index'

const RouterPage404: RouteObject = {
  path: "/*",
  element: (
    <NotFoundPage />
  )
}

export default RouterPage404