
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
function App() {


  return (
    <>
      <Provider store={store}>
        <LayoutProvider>
          <AuthProvider>
            <BrowserRouter >
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<ProtectedRoute><Layout3 /></ProtectedRoute>} >
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='employees' element={<EmployeeList />} />
                  <Route path='employees/new' element={<Emp />} />
                </Route>
                {/* Protected Route */}
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </LayoutProvider>
      </Provider>
    </>
  )
}

export default App
