import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button, Navbar, Nav, Table } from 'react-bootstrap'
import { AppState } from '../Store'
import './Dashboard.css'
import '../Container/TableContainer.css'
import '../Container/TextContainer.css'
import '../Container/ImageContainer.css'
import '../Container/VideoContainer.css'

const DashboardAdmin: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user)
  const students = useSelector((state: AppState) => state.students)
  const roles = useSelector((state: AppState) => state.roles)

  useEffect(() => {
   
    const englishStudents = [
      { id: '1', name: 'Sarah Johnson', email: 'sarah.j@example.com', course: 'Computer Science', status: 'Active' },
      { id: '2', name: 'David Chen', email: 'david.chen@example.com', course: 'Data Science', status: 'Active' },
      { id: '3', name: 'Emily Rodriguez', email: 'emily.r@example.com', course: 'Artificial Intelligence', status: 'Active' },
      { id: '4', name: 'James Wilson', email: 'james.w@example.com', course: 'Software Engineering', status: 'Active' },
      { id: '5', name: 'Maria Garcia', email: 'maria.g@example.com', course: 'Cybersecurity', status: 'On Leave' },
      { id: '6', name: 'Robert Taylor', email: 'robert.t@example.com', course: 'Computer Science', status: 'Active' },
    ]

    // 
    const hasChinese = students.some(s => /[\u4e00-\u9fa5]/.test(s.name))

    if (students.length === 0 || hasChinese) {
      dispatch({
        type: 'SET_STUDENTS',
        payload: englishStudents,
      })
    }
  }, [dispatch, students])

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  // System statistics
  const totalUsers = students.length + 5 // Students + admins/staff
  const activeUsers = students.filter((s) => s.status === 'Active').length + 5
  const totalRoles = roles.length
  const recentActions = 12 // Actions in last 24 hours

  // Recent activity data
  const recentActivity = [
    { time: '10:31 AM', user: 'Admin', action: 'Added new user' },
    { time: '10:15 AM', user: 'Sarah Johnson', action: 'Changed password' },
    { time: '09:45 AM', user: 'David Chen', action: 'Updated profile' },
    { time: '09:20 AM', user: 'Admin', action: 'Modified user role' },
    { time: '08:55 AM', user: 'Emily Rodriguez', action: 'Logged in' },
    { time: '08:30 AM', user: 'James Wilson', action: 'Enrolled in course' },
    { time: '08:10 AM', user: 'Admin', action: 'Generated report' },
    { time: '07:45 AM', user: 'Maria Garcia', action: 'Updated settings' },
  ]

  const activityColumns = [
    { key: 'time', label: 'Time' },
    { key: 'user', label: 'User' },
    { key: 'action', label: 'Action' },
  ]

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'course', label: 'Course' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span className={`badge ${value === 'Active' ? 'bg-success' : 'bg-warning'}`}>
          {value}
        </span>
      ),
    },
  ]

  const sampleImages = [
    { src: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Student+1', alt: 'Student 1', caption: 'Outstanding Student Showcase' },
    { src: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=Student+2', alt: 'Student 2', caption: 'Project Achievement' },
    { src: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Student+3', alt: 'Student 3', caption: 'Activity Photos' },
  ]

  const sampleVideos = [
    {
      title: 'Student Project Demo',
      description: '2024 Outstanding Project Showcase',
      placeholder: true,
    },
  ]

  return (
    <div className="dashboard-page">
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white d-flex align-items-center">
            <img
              src="/logo-placeholder.svg"
              alt="CSIS IAM Logo"
              height="40"
              className="me-3"
              style={{ objectFit: 'contain' }}
            />
            <span>CSIS IAM Service - Admin</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/admin/dashboard')} className="text-white">
                Dashboard
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/admin/users')} className="text-white">
                Student Management
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/admin/audit-logs')} className="text-white">
                Audit Logs
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/admin/settings')} className="text-white">
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

        {/* System Statistics - First Row */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="custom-card stat-card">
              <Card.Body>
                <h3>Total Users</h3>
                <h2 className="stat-number">{totalUsers}</h2>
                <p className="stat-description">How many users exist in the system</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card stat-card">
              <Card.Body>
                <h3>Active Users</h3>
                <h2 className="stat-number">{activeUsers}</h2>
                <p className="stat-description">
                  Currently active users<br />
                  ({students.filter((s) => s.status === 'Active').length} students + 5 admin/staff)
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="custom-card stat-card">
              <Card.Body>
                <h3>Roles</h3>
                <h2 className="stat-number">{totalRoles}</h2>
                <div className="stat-description">
                  <ul className="roles-list">
                    {roles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Activity Section with Actions Count */}
        <div className="table-container fade-in">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h3 className="table-container-title mb-2">
                Recent Actions: <span className="stat-number" style={{ fontSize: '2rem', color: '#667eea' }}>{recentActions}</span>
              </h3>
              <p className="stat-description" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#999' }}>
                How many actions were recorded in the audit logs today (Last 24 hours)
              </p>
            </div>
          </div>
          <div className="table-wrapper">
            <Table striped hover className="custom-table">
              <thead>
                <tr>
                  {activityColumns.map((column) => (
                    <th key={column.key}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((row, index) => (
                  <tr key={index}>
                    {activityColumns.map((column) => (
                      <td key={column.key}>{row[column.key as keyof typeof row]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Students List */}
        <div className="table-container fade-in">
          <h3 className="table-container-title">Students List</h3>
          <div className="table-wrapper">
            <Table striped hover className="custom-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((row, index) => (
                  <tr key={index} style={{ cursor: 'pointer' }} onClick={() => console.log('Clicked student:', row)}>
                    {columns.map((column) => (
                      <td key={column.key}>
                        {column.render ? column.render(row[column.key as keyof typeof row]) : row[column.key as keyof typeof row]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* System Introduction */}
        <div className="text-container highlight fade-in">
          <h3 className="text-container-title">System Introduction</h3>
          <div className="text-container-content">
            <p>CSIS IAM Service is a modern Identity and Access Management platform that provides user authentication, authorization, role management, and comprehensive audit logging capabilities.</p>
          </div>
        </div>

        {/* Student Showcase */}
        <div className="image-container fade-in">
          <h3 className="image-container-title">Student Showcase</h3>
          <div className="image-grid layout-grid columns-3">
            {sampleImages.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.src} alt={image.alt} />
                <div className="image-caption">{image.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Showcase */}
        <div className="video-container fade-in">
          <h3 className="video-container-title">Project Showcase</h3>
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

export default DashboardAdmin
