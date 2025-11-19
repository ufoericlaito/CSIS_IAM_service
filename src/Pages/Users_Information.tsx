import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button, Navbar, Nav, Modal, Form, Table } from 'react-bootstrap'
import { AppState } from '../Store'
import './Dashboard.css'
import '../Container/TableContainer.css'

const UsersInformation: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const students = useSelector((state: AppState) => state.students)
  const [showModal, setShowModal] = useState(false)
  const [editingStudent, setEditingStudent] = useState<any>(null)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const handleEdit = (student: any) => {
    setEditingStudent(student)
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      dispatch({ type: 'DELETE_STUDENT', payload: id })
    }
  }

  const handleSave = () => {
    if (editingStudent) {
      dispatch({ type: 'UPDATE_STUDENT', payload: editingStudent })
      setShowModal(false)
      setEditingStudent(null)
    }
  }

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
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: any) => (
        <div>
          <Button size="sm" variant="primary" onClick={() => handleEdit(row)} className="me-2">
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={() => handleDelete(row.id)}>
            Delete
          </Button>
        </div>
      ),
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
            <span>CSIS IAM Service - Student Management</span>
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
              <Button variant="outline-light" size="sm" onClick={handleLogout} className="ms-3">
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="container-wrapper">
        <h1 className="page-title fade-in">Student Information Management</h1>

        <div className="table-container fade-in">
          <h3 className="table-container-title">All Students</h3>
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
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.key}>
                        {column.render ? column.render(row[column.key as keyof typeof row], row) : row[column.key as keyof typeof row]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingStudent && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editingStudent.name}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={editingStudent.email}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  type="text"
                  value={editingStudent.course}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, course: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={editingStudent.status}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, status: e.target.value })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Graduated">Graduated</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UsersInformation
