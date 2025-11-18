import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store'
import './App.css'

// Pages
import LoginPage from './Pages/Login_Page/Login_Page'
import RegisterPage from './Pages/Login_Page/Register_Page'
import ResetPassword from './Pages/Login_Page/Reset_Password'
import DashboardAdmin from './Pages/Dashboard_Home_Page_ADMIN'
import DashboardUser from './Pages/Dashboard_Home_Page_User'
import UsersInformation from './Pages/Users_Information'
import StudentManagement from './Pages/ADMIN/Student_Management'
import AuditLogs from './Pages/ADMIN/Audit_Logs'
import SettingsPage from './Pages/Settings_Page'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/user/dashboard" element={<DashboardUser />} />
            <Route path="/admin/users" element={<StudentManagement />} />
            <Route path="/admin/users-old" element={<UsersInformation />} />
            <Route path="/admin/audit-logs" element={<AuditLogs />} />
            <Route path="/admin/settings" element={<SettingsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App

