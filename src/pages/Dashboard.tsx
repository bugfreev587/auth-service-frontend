import { useUser, SignOutButton } from '@clerk/clerk-react'
import '../App.css'

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <div className="user-info">
          <h2>Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}!</h2>
          {user?.imageUrl && (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="profile-image"
            />
          )}
          <div className="user-details">
            <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
            {user?.firstName && (
              <p><strong>First Name:</strong> {user.firstName}</p>
            )}
            {user?.lastName && (
              <p><strong>Last Name:</strong> {user.lastName}</p>
            )}
            <p><strong>User ID:</strong> {user?.id}</p>
          </div>
          <div className="sign-out-container">
            <SignOutButton>
              <button className="sign-out-button">Sign Out</button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </div>
  )
}

