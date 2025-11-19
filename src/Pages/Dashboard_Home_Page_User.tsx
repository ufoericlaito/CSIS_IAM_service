import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import { AppState } from '../Store'
import './Dashboard.css'
import '../Container/TableContainer.css'
import '../Container/TextContainer.css'
import '../Container/ImageContainer.css'
import '../Container/VideoContainer.css'

const DashboardUser: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const sampleImages = [
    { src: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Course+1', alt: 'Course 1', caption: 'Computer Science Fundamentals' },
    { src: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Course+2', alt: 'Course 2', caption: 'Data Structures & Algorithms' },
    { src: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Course+3', alt: 'Course 3', caption: 'Introduction to AI' },
  ]

  const sampleVideos = [
    {
      title: 'Course Video',
      description: 'Online Learning Resources',
      placeholder: true,
    },
  ]

  return (
    <div className="dashboard-page">
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white d-flex align-items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo-placeholder.svg`}
              alt="CSIS IAM Logo"
              height="40"
              className="me-3"
              style={{ objectFit: 'contain' }}
            />
            <span>CSIS IAM Service</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/user/dashboard')} className="text-white">
                My Dashboard
              </Nav.Link>
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
            <h1 className="page-title fade-in">Welcome, {user.name}!</h1>
          </Col>
        </Row>

        {/* Personal Information */}
        <div className="text-container info fade-in">
          <h3 className="text-container-title">Personal Information</h3>
          <div className="text-container-content">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Student ID:</strong> 2024001</p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>Year:</strong> 2024</p>
          </div>
        </div>

        {/* My Courses */}
        <div className="image-container fade-in">
          <h3 className="image-container-title">My Courses</h3>
          <div className="image-grid layout-grid columns-3">
            {sampleImages.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.src} alt={image.alt} />
                <div className="image-caption">{image.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="video-container fade-in">
          <h3 className="video-container-title">Learning Resources</h3>
          <div className="video-grid layout-grid columns-1">
            {sampleVideos.map((video, index) => (
              <div key={index} className="video-item">
                <div className="video-wrapper">
                  <div className="video-placeholder">
                    <div className="placeholder-icon">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
                        <polygon points="30,20 30,60 60,40" />
                      </svg>
                    </div>
                    <p className="placeholder-text">Video Placeholder</p>
                  </div>
                </div>
                <div className="video-info">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DashboardUser
