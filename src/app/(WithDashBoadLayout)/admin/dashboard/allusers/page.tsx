import AllUsers from "@/components/module/users/Allusers/AllUsers"
import { GetAllUsers } from "@/services/Users"

const page = async() => {
const data = await GetAllUsers()
const user = data?.data

  return (
    <div>
    <AllUsers users = {user}/>
    </div>
  )
}

export default page