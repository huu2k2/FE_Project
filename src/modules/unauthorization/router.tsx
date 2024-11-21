import { RouteObject } from 'react-router-dom'
import { UnauthorizationPage } from './index'

const RouterPageUnauthorization: RouteObject = {
  path: "/unauthorized",
  element: (
    <UnauthorizationPage />
  )
}

export default RouterPageUnauthorization