import { Navigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import Dashboard from '../pages/Dashboard'

export default function DashboardRoute() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return (
      <div className="page-container">
        <div className="page-content">
          <div className="page-card">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  // If user is not signed in, redirect to sign-in page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />
  }

  // Check if user has selected a pricing plan
  // For now, we check localStorage. In the future, this could be from user metadata or API
  const selectedPlan = localStorage.getItem('selected_pricing_plan')

  // If user hasn't selected a plan, redirect to pricing page
  if (!selectedPlan) {
    return <Navigate to="/pricing" replace />
  }

  // User is signed in and has selected a plan, show Dashboard
  return <Dashboard />
}
