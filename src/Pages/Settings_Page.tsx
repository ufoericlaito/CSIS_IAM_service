import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button, Navbar, Nav, Card, Form, Row, Col, Alert } from 'react-bootstrap'
import { AppState } from '../Store'
import './Dashboard.css'
import '../Container/TableContainer.css'

const SettingsPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)

  const [email, setEmail] = useState(user.email || '')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('en')
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const handleUpdateEmail = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would make an API call
    setSuccessMessage('Email address updated successfully!')
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long!')
      return
    }
    // In a real app, this would make an API call
    setSuccessMessage('Password changed successfully!')
    setShowSuccess(true)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleLogoutAllSessions = () => {
    if (window.confirm('Are you sure you want to logout from all devices?')) {
      // In a real app, this would invalidate all sessions
      setSuccessMessage('Logged out from all sessions successfully!')
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        handleLogout()
      }, 2000)
    }
  }

  const handleSaveAppearance = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save preferences
    setSuccessMessage('Appearance settings saved successfully!')
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="dashboard-page">
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white">UL Management System - Settings</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link 
                onClick={() => navigate(user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard')} 
                className="text-white"
              >
                Dashboard
              </Nav.Link>
              {user.role === 'admin' && (
                <>
                  <Nav.Link onClick={() => navigate('/admin/users')} className="text-white">
                    Student Management
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate('/admin/audit-logs')} className="text-white">
                    Audit Logs
                  </Nav.Link>
                </>
              )}
              <Nav.Link onClick={() => navigate('/settings')} className="text-white">
                Settings
              </Nav.Link>
              <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-3">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="container-wrapper">
        <Row className="mb-4">
          <Col>
            <h1 className="page-title fade-in">Settings</h1>
          </Col>
        </Row>

        {showSuccess && (
          <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
            {successMessage}
          </Alert>
        )}

        <Row>
          {/* Email Settings */}
          <Col md={6} className="mb-4">
            <Card className="custom-card stat-card h-100">
              <Card.Body>
                <h3 className="mb-4">Email Address</h3>
                <Form onSubmit={handleUpdateEmail}>
                  <Form.Group className="mb-3">
                    <Form.Label>Current Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter new email address"
                    />
                    <Form.Text className="text-muted">
                      You will need to verify your new email address.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update Email
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Change Password */}
          <Col md={6} className="mb-4">
            <Card className="custom-card stat-card h-100">
              <Card.Body>
                <h3 className="mb-4">Change Password</h3>
                <Form onSubmit={handleChangePassword}>
                  <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Change Password
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Session Management */}
          <Col md={6} className="mb-4">
            <Card className="custom-card stat-card h-100">
              <Card.Body>
                <h3 className="mb-4">Session Management</h3>
                <p className="text-muted">
                  Logout from all devices and sessions. You will need to login again on all devices.
                </p>
                <Button variant="danger" onClick={handleLogoutAllSessions}>
                  Logout All Sessions
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Appearance Settings */}
          <Col md={6} className="mb-4">
            <Card className="custom-card stat-card h-100">
              <Card.Body>
                <h3 className="mb-4">Appearance Settings</h3>
                <Form onSubmit={handleSaveAppearance}>
                  <Form.Group className="mb-3">
                    <Form.Label>Theme</Form.Label>
                    <Form.Select
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto (System)</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="zh">中文</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Preferences
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Account Information */}
        <Row>
          <Col md={12} className="mb-4">
            <Card className="custom-card stat-card">
              <Card.Body>
                <h3 className="mb-4">Account Information</h3>
                <Row>
                  <Col md={6}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                  </Col>
                  <Col md={6}>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Account ID:</strong> {user.id}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SettingsPage


