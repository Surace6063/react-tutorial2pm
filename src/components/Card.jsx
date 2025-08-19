const Card = ({user}) => {
    return (
        <div className="border border-slate-400 p-4 rounded-md w-fit">
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}
export default Card