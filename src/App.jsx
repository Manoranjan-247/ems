
import './App.css'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import { LayoutProvider } from './components/context/LayoutContext'
import EmployeeList from './components/employee/EmployeeList'
import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './Layout'
import Dashboard from './dashboard/Dashboard'
import Layout2 from './components/c2/Layout2'
import Layout3 from './components/c3/Layout3'
import { Provider } from 'react-redux'
import store from './app/store'
import AddEmployee from './components/employee/AddEmployee'
import Emp from './components/employee/Emp'
import EmployeeDetails from './components/employee/EmployeeDetails'
// import EmployeeDetails2 from './components/employee/EmployeeDetails2'
import EmployeeDetailsShimmer from './components/employee/EmployeeDetailsShimmer'
import { lazy, Suspense } from 'react'
import { ConfirmDialogProvider } from './components/context/ConfirmDialogContext'
import Error from './components/c3/Error'
import Home from './pages/Home'
const EmployeeDetails2 = lazy(()=>import('./components/employee/EmployeeDetails2'))
function App() {


  return (
    <>
      <Provider store={store}>
        <ConfirmDialogProvider>
        <LayoutProvider>
          <AuthProvider>
            <BrowserRouter >
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<ProtectedRoute><Layout3 /></ProtectedRoute>} >
                  <Route path='/' element={<Home />} />
                  <Route path='employees' element={<EmployeeList />} />
                  <Route path='employees/new' element={<Emp />} />
                  <Route path='employee-edit/:id' element={<Emp />} />
                  <Route path="/employee-details/:id"
                    element={<Suspense fallback={<EmployeeDetailsShimmer />} >
                      <EmployeeDetails2 />
                    </Suspense>} />
                </Route>
                <Route path='*' element={<Error />} />
                {/* Protected Route */}
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </LayoutProvider>
        </ConfirmDialogProvider>
      </Provider>
    </>
  )
}

export default App
