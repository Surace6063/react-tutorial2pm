import UserAddress from "./UserAddress"

const UserProfile = ({id,username,age,address}) => {

  return (
    <div className="border border-slate-300 w-[300px] p-4 rounded-md mb-4 ml-4">
        <p>ID: {id}</p>
        <p>Username: {username}</p>
        <p>Age: {age}</p>

        <UserAddress address={address} />
    </div>
  )
}
export default UserProfile