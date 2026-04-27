import BestSeller from './common/bestSeller'
import CowDung from './common/cowDung'
import HomeDecor from './common/homeDecor'
import NewArrival from './common/newArrival'
import Product from './common/product'
import Products from './common/products'

import Home from './landingPage/home'

import * as Layout from 'layouts'

const auth = []

const common = []

const landingPages = [
  {
    path: '/home',
    Component: Home,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/products',
    Component: Products,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/bestseller',
    Component: BestSeller,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/cowdung',
    Component: CowDung,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/homedecor',
    Component: HomeDecor,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/newarrival',
    Component: NewArrival,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/product',
    Component: Product,
    Super: Layout.Home,
    auth: false
  }
]

const routes = [...auth, ...common, ...landingPages]
export default routes
