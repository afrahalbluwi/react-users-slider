
import "./UserCard.css";

function UserCard({ user }) {
    return (

        <div className="user-card">
        <img src={user.profileImage} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  export default UserCard;