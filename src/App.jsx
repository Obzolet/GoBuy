
import './App.css'
import AuthProvider from './feature/context/auth/auth_provider'
import UserProvider from './feature/context/user/user_provider'


import RouteGobuy from './routes/route_gobuy'


function App() {

  return (
    <>
    
    <AuthProvider>
      <UserProvider>
        <RouteGobuy/>
      </UserProvider>
    </AuthProvider>
    
    </>
  )
}

export default App
