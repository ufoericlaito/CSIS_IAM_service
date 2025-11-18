import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Form, Button, Card } from 'react-bootstrap'
import './Login.css'

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Password reset link has been sent to your email')
    navigate('/login')
  }

  return (
    <div className="login-page">
      <Container className="login-container">
        <Card className="login-card fade-in">
          <Card.Body>
            <div className="text-center mb-4">
              <h1 className="login-title">Reset Password</h1>
              <p className="login-subtitle">Enter your email address</p>
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
                  required
                />
              </Form.Group>

              <Button type="submit" className="btn-custom w-100 mb-3">
                Send Reset Link
              </Button>

              <div className="text-center">
                <Link to="/login" className="register-link">
                  Back to Login
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default ResetPassword
