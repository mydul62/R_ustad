import AllUsers from "@/components/module/users/Allusers/AllUsers"
import { GetAllUsers } from "@/services/Users"

const page = async() => {
const {data} = await GetAllUsers()

  return (
    <div>
    <AllUsers users = {data}/>
    </div>
  )
}

export default page