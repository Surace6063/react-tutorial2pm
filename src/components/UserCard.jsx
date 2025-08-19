import Card from "./Card"

const UserCard = () => {
    const users = [
        {id: 101,username:"john",age:24},
        {id: 102,username:"john 2",age:23},
        {id: 103,username:"john 3",age:26},
    ]

    const popularUsers = [
        {id: 104,username:"john 4",age:24},
        {id: 105,username:"john 5",age:23},
        {id: 106,username:"john 6",age:26},
    ]

  return (
    <div className="space-y-2 p-10">
        {users.map(user => (
           <Card key={user.id} user={user} />
        ))}

        <h1>popular users</h1>
        {popularUsers.map(user => (
           <Card key={user.id} user={user} />
        ))}
    </div>
  )
}
export default UserCard