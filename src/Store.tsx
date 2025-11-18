import { createStore } from 'redux'

// Define state interface
interface AppState {
  user: {
    id: string | null
    name: string | null
    email: string | null
    role: 'admin' | 'user' | null
    isAuthenticated: boolean
  }
  users: Array<{
    id: string
    firstName: string
    lastName: string
    email: string
    role: string
    status: 'Active' | 'Inactive'
    course?: string
  }>
  students: Array<{
    id: string
    name: string
    email: string
    course: string
    status: string
  }>
  roles: string[]
}

// Initial state
const initialState: AppState = {
  user: {
    id: null,
    name: null,
    email: null,
    role: null,
    isAuthenticated: false,
  },
  users: [],
  students: [],
  roles: ['Admin', 'Staff', 'Student', 'Guest'],
}

// Action types
type Action =
  | { type: 'LOGIN'; payload: { id: string; name: string; email: string; role: 'admin' | 'user' } }
  | { type: 'LOGOUT' }
  | { type: 'SET_USERS'; payload: AppState['users'] }
  | { type: 'ADD_USER'; payload: AppState['users'][0] }
  | { type: 'UPDATE_USER'; payload: AppState['users'][0] }
  | { type: 'DELETE_USER'; payload: string }
  | { type: 'DEACTIVATE_USER'; payload: string }
  | { type: 'SET_STUDENTS'; payload: AppState['students'] }
  | { type: 'ADD_STUDENT'; payload: AppState['students'][0] }
  | { type: 'UPDATE_STUDENT'; payload: AppState['students'][0] }
  | { type: 'DELETE_STUDENT'; payload: string }
  | { type: 'SET_ROLES'; payload: string[] }
  | { type: 'ADD_ROLE'; payload: string }
  | { type: 'DELETE_ROLE'; payload: string }

// Reducer
function rootReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          ...action.payload,
          isAuthenticated: true,
        },
      }
    case 'LOGOUT':
      return {
        ...state,
        user: {
          id: null,
          name: null,
          email: null,
          role: null,
          isAuthenticated: false,
        },
      }
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }
    case 'DEACTIVATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, status: 'Inactive' } : user
        ),
      }
    case 'SET_STUDENTS':
      return {
        ...state,
        students: action.payload,
      }
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [...state.students, action.payload],
      }
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      }
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      }
    case 'SET_ROLES':
      return {
        ...state,
        roles: action.payload,
      }
    case 'ADD_ROLE':
      return {
        ...state,
        roles: [...state.roles, action.payload],
      }
    case 'DELETE_ROLE':
      return {
        ...state,
        roles: state.roles.filter((role) => role !== action.payload),
      }
    default:
      return state
  }
}

export const store = createStore(rootReducer)
export type { AppState }

