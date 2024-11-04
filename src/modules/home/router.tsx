import { RouteObject } from 'react-router-dom'
import { HomePages } from './index'

const RouterHomePage: RouteObject = {
  path: "/",
  element: (
    <HomePages />
  )
}

export default RouterHomePage