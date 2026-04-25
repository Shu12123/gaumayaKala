import Home from './landingPage/home'

import All_Products from './common/allproduct/Allproduct'
import BestSeller from './common/bestseller/Bestseller'
import Cowdung from './common/cowdung/Cowdung'
import Homedecor from './common/homedecor'
import Newarrival from './common/newarrival/Newarrival'

import Product from './common/product'
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
    path: '/allproducts',
    Component: All_Products,
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
    Component: Cowdung,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/homedecor',
    Component: Homedecor,
    Super: Layout.Home,
    auth: false
  },
  {
    path: '/newarrival',
    Component: Newarrival,
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
