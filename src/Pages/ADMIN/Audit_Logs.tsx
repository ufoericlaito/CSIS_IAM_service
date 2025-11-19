import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Button, Navbar, Nav, Table } from 'react-bootstrap'
import '../Dashboard.css'
import '../../Container/TableContainer.css'

const AuditLogs: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const auditData = [
    {
      id: '1',
      user: 'Administrator',
      action: 'Create Student',
      target: 'John Smith',
      timestamp: '2024-01-15 10:30:00',
      status: 'Success',
    },
    {
      id: '2',
      user: 'Administrator',
      action: 'Update Student Info',
      target: 'Emma Wilson',
      timestamp: '2024-01-15 11:20:00',
      status: 'Success',
    },
    {
      id: '3',
      user: 'Administrator',
      action: 'Delete Student',
      target: 'Michael Brown',
      timestamp: '2024-01-15 14:15:00',
      status: 'Success',
    },
  ]

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'user', label: 'User' },
    { key: 'action', label: 'Action' },
    { key: 'target', label: 'Target' },
    { key: 'timestamp', label: 'Timestamp' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <span className={`badge ${value === 'Success' ? 'bg-success' : 'bg-danger'}`}>
          {value}
        </span>
      ),
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
            <span>CSIS IAM Service - Audit Logs</span>
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
        <h1 className="page-title fade-in">System Audit Logs</h1>

        <div className="table-container fade-in">
          <h3 className="table-container-title">Operation Records</h3>
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
                {auditData.map((row, index) => (
                  <tr key={index}>
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
      </Container>
    </div>
  )
}

export default AuditLogs
