import React from 'react'
import {Link, Outlet} from 'react-router'


const Layout = () => {
  return (
    <div>

        <header>
          <details>
            <Link to={'/'}>
            <p>Sobir</p>
            </Link>
            <Link to={'/home2'}>
            <p>sobir2</p>
            </Link>
          </details>
          <details>
          <Link to={'/about'}>
            <p>Rahmatjon</p>
            </Link>
            <Link to={'/about2'}>
            <p>Rahmatjon2</p>
            </Link>
          </details>
          <details>
            <Link to={'/catalog'}>
            <p>Azam</p>
            </Link>
            <Link to={'/catalog2'}>
            <p>Azam2</p>
            </Link>
          </details>
          <details>
            <Link to={'/contact'}>
            <p>Nozina</p>
            </Link>
            <Link to={'/contact2'}>
            <p>Nozina2</p>
            </Link>
          </details>
          <details>
          <Link to={'/main'}>
            <p>Yoqub</p>
            </Link>
            <Link to={'/main2'}>
            <p>Yoqub2</p>
            </Link>
          </details>
            <details>
            <Link to={'/category'}>
            <p>Fahim</p>
            </Link>
            <Link to={'/category2'}>
            <p>Fahim2</p>
            </Link>
            </details>
            
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <p>Footer</p>
        </footer>

    </div>
  )
}

export default Layout