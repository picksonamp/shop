import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Data from './data/context/context';
import Product from './data/interfaces/Product';
import Value from './data/interfaces/Category';
import User from './data/interfaces/user';
import Header from './components/header/header';
import HomePage from './components/main-section/home-page/home-page';
import Footer from './components/footer/footer';
// import FullCard from './components/fullCard';

const Cards = lazy(() => import('./components/cards/Cards'))
const Contacts = lazy(() => import('./components/main-section/contacts'))
const Registration = lazy(() => import('./components/main-section/registration/registration'))
const PrivateRoute = lazy(() => import('./components/header/privateRoute/privateRoute'))
const RegistrationSuccess = lazy(() => import('./components/main-section/registration/registrationSuccess'))
const PerssonalAccount = lazy(() => import('./components/main-section/personalAccount/personalAccount'))
const Auth = lazy(() => import('./components/main-section/auth/auth'))

function App() {

  const [products, setProducts] = React.useState<Product[]>([])
  const [auth, setAuth] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState<User>(
    {
      surname: '',
      name: '',
      email: '',
      password: ''
    }
  )
  const [firstAnswer, setFirstAnswer] = React.useState('')

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .then(() => console.log(products))
      .catch(err => console.error(err, 'Products not found'))
  }, [])

  const value: Value = {
    products,
    setProducts
  }

  return (
    <>
      <Data.Provider value={value}>

        <Header
          auth={auth}
          setAuth={setAuth}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser} />

        <Suspense fallback={<p>Loding...</p>}>
          <Routes>

            <Route index path='/' element={<HomePage />} />

            <Route path='cards' element={<Cards />} />

            <Route path='contacts' element={<Suspense fallback={<p>Loading...</p>}><Contacts /></Suspense>} />

            <Route 
              path='auth' 
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Auth 
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    auth={auth}
                    setAuth={setAuth} />
                </Suspense>}/>

            <Route
              path='registration'
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Registration
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    auth={auth}
                    setAuth={setAuth} />
                </Suspense>}
            />

            <Route element={<PrivateRoute auth={auth} />}>

              <Route
                path='registration-success'
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <RegistrationSuccess />
                  </Suspense>
                } />

              <Route
                path='personal-account'
                element={
                  <Suspense fallback={<p>Loding...</p>}>
                    <PerssonalAccount />
                  </Suspense>
                }
              />
            </Route>

            

          </Routes>

        </Suspense>

        <Footer />

      </Data.Provider>
    </>
  );
}

export default App;
