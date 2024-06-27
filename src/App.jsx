import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Authpage from './pages/AuthPage/Authpage'
import PageLayout from './Layouts/PageLayouts/PageLayout'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/firebase'

function App() {
  const [authUser] = useAuthState(auth)
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <Homepage /> : <Navigate to="/auth"/>} />
        <Route path='/auth' element={!authUser ? <Authpage /> : <Navigate to="/"/>} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
