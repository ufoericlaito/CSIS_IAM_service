import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Button, Navbar, Nav, Modal, Form, Table, Row, Col, Badge } from 'react-bootstrap'
import { AppState } from '../../Store'
import '../Dashboard.css'
import '../../Container/TableContainer.css'

const StudentManagement: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector((state: AppState) => state.users)
  const roles = useSelector((state: AppState) => state.roles)

  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false)
  const [editingUser, setEditingUser] = useState<any>(null)
  const [deactivatingUser, setDeactivatingUser] = useState<any>(null)
  const [resetPasswordUser, setResetPasswordUser] = useState<any>(null)
  const [filterRole, setFilterRole] = useState<string>('All')
  const [filterStatus, setFilterStatus] = useState<string>('All')

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Student',
  })

  // Initialize with sample users
  useEffect(() => {
    if (users.length === 0) {
      const sampleUsers = [
        { id: '1', firstName: 'Sarah', lastName: 'Johnson', email: 'sarah.j@ul.com', role: 'Student', status: 'Active' as const, course: 'Computer Science' },
        { id: '2', firstName: 'David', lastName: 'Chen', email: 'david.c@ul.com', role: 'Student', status: 'Active' as const, course: 'Data Science' },
        { id: '3', firstName: 'Emily', lastName: 'Rodriguez', email: 'emily.r@ul.com', role: 'Student', status: 'Active' as const, course: 'AI' },
        { id: '4', firstName: 'James', lastName: 'Wilson', email: 'james.w@ul.com', role: 'Staff', status: 'Active' as const },
        { id: '5', firstName: 'Maria', lastName: 'Garcia', email: 'maria.g@ul.com', role: 'Student', status: 'Inactive' as const, course: 'Cybersecurity' },
      ]
      dispatch({ type: 'SET_USERS', payload: sampleUsers })
    }
  }, [dispatch, users.length])

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  const handleAddUser = () => {
    const user = {
      id: Date.now().toString(),
      ...newUser,
      status: 'Active' as const,
    }
    dispatch({ type: 'ADD_USER', payload: user })
    setShowAddModal(false)
    setNewUser({ firstName: '', lastName: '', email: '', role: 'Student' })
  }

  const handleEditUser = (user: any) => {
    setEditingUser(user)
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (editingUser) {
      dispatch({ type: 'UPDATE_USER', payload: editingUser })
      setShowEditModal(false)
      setEditingUser(null)
    }
  }

  const handleDeactivateClick = (user: any) => {
    setDeactivatingUser(user)
    setShowDeactivateModal(true)
  }

  const handleConfirmDeactivate = () => {
    if (deactivatingUser) {
      dispatch({ type: 'DEACTIVATE_USER', payload: deactivatingUser.id })
      setShowDeactivateModal(false)
      setDeactivatingUser(null)
    }
  }

  const handleConfirmResetPassword = () => {
    // In a real app, this would send a reset password email
    alert(`Password reset email sent to ${resetPasswordUser.email}`)
    setShowResetPasswordModal(false)
    setResetPasswordUser(null)
  }

  const handleDeleteUser = (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch({ type: 'DELETE_USER', payload: id })
    }
  }

  // Filter users
  const filteredUsers = users.filter((user) => {
    const roleMatch = filterRole === 'All' || user.role === filterRole
    const statusMatch = filterStatus === 'All' || user.status === filterStatus
    return roleMatch && statusMatch
  })

  const columns = [
    { key: 'id', label: 'ID' },
    { 
      key: 'name', 
      label: 'Name',
      render: (_: any, row: any) => `${row.firstName} ${row.lastName}`
    },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <Badge bg={value === 'Active' ? 'success' : 'secondary'}>
          {value}
        </Badge>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: any) => (
        <div className="d-flex gap-2">
          <Button size="sm" variant="primary" onClick={() => handleEditUser(row)}>
            Edit
          </Button>
          <Button size="sm" variant="secondary" onClick={() => handleDeactivateClick(row)}>
            Deactivate
          </Button>
          <Button size="sm" variant="danger" onClick={() => handleDeleteUser(row.id)}>
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
          <Navbar.Brand className="text-white">UL Management System - Student Management</Navbar.Brand>
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
            <h1 className="page-title fade-in">Student Management</h1>
          </Col>
        </Row>

        {/* Filters and Add Button */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label className="text-white">Filter by Role</Form.Label>
              <Form.Select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                <option value="All">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="text-white">Filter by Status</Form.Label>
              <Form.Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} className="d-flex align-items-end justify-content-end">
            <Button variant="success" onClick={() => setShowAddModal(true)}>
              + Add User
            </Button>
          </Col>
        </Row>

        {/* Users Table */}
        <div className="table-container fade-in">
          <h3 className="table-container-title">All Users ({filteredUsers.length})</h3>
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
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center">
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((row, index) => (
                    <tr key={index}>
                      {columns.map((column) => (
                        <td key={column.key}>
                          {column.render ? column.render(row[column.key as keyof typeof row], row) : row[column.key as keyof typeof row]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      {/* Add User Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit User Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editingUser.firstName}
                  onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editingUser.lastName}
                  onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={editingUser.status}
                  onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="warning"
            onClick={() => {
              setResetPasswordUser(editingUser)
              setShowResetPasswordModal(true)
            }}
          >
            Reset Password
          </Button>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Deactivate User Modal */}
      <Modal show={showDeactivateModal} onHide={() => setShowDeactivateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Deactivate User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deactivatingUser && (
            <div>
              <div className="alert alert-warning">
                <strong>⚠️ Warning!</strong>
                <p className="mb-0 mt-2">
                  Are you sure you want to deactivate user <strong>{deactivatingUser.firstName} {deactivatingUser.lastName}</strong>?
                </p>
                <p className="mb-0 mt-2">
                  This user will no longer be able to access the system until reactivated.
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeactivateModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDeactivate}>
            Deactivate User
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Reset Password Modal */}
      <Modal show={showResetPasswordModal} onHide={() => setShowResetPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resetPasswordUser && (
            <div>
              <p>
                Send a password reset email to <strong>{resetPasswordUser.email}</strong>?
              </p>
              <p className="text-muted">
                The user will receive an email with instructions to reset their password.
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowResetPasswordModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmResetPassword}>
            Send Reset Email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StudentManagement
