import Members from "@/components/module/users/Members/Members"
import { GetAllResearchAssociate } from "@/services/reserarchers"


const page =async () => {

const {data} = await GetAllResearchAssociate()
  return (
    <div>
    <Members data = {data}></Members>
    </div>
  )
}

export default page