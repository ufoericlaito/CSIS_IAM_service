import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Form, Button, Card } from 'react-bootstrap'
import './Login.css'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Demo login logic
    if (email === 'admin@ul.com' && password === 'admin123') {
      dispatch({
        type: 'LOGIN',
        payload: { id: '1', name: 'Admin User', role: 'admin' },
      })
      navigate('/admin/dashboard')
    } else if (email && password) {
      dispatch({
        type: 'LOGIN',
        payload: { id: '2', name: 'Student User', role: 'user' },
      })
      navigate('/user/dashboard')
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <div className="login-page">
      <Container className="login-container">
        <Card className="login-card fade-in">
          <Card.Body>
            <div className="text-center mb-4">
              <h1 className="login-title">UL Student Management System</h1>
              <p className="login-subtitle">Welcome Back</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="custom-input"
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <Link to="/reset-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="btn-custom w-100 mb-3">
                Login
              </Button>

              <div className="text-center">
                <span>Don't have an account? </span>
                <Link to="/register" className="register-link">
                  Sign Up
                </Link>
              </div>
            </Form>

            <div className="demo-info mt-4">
              <small>
                <strong>Demo Accounts:</strong><br />
                Admin: admin@ul.com / admin123<br />
                Student: any email and password
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default LoginPage
