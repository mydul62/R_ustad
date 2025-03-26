import MemberUpdate from "@/components/module/admin/MembersUpdateByAdmin/MemberUpdate";
import { GetSingleMember } from "@/services/reserarchers";

const page =async ({params}:{params:any}) => {
 const {slug} =await params;
 const {data}=await GetSingleMember(slug)
 
  return (

    <div><MemberUpdate data={data} id={slug}></MemberUpdate></div>
  )
}

export default page