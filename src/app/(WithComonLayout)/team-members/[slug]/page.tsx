import ProfileDetails from "@/components/module/profile/ProfileDetails/ProfileDetails"
import { GetResearchPaperById } from "@/services/allreserchPaper";


const page =async ({ params}: {params:any}) => {
  const { slug } =await params;
 const {data} = await GetResearchPaperById("67e2902129180fd5d0bb1a56")

  return (
    <div>
      <ProfileDetails data = {data} ></ProfileDetails>
    </div>
  )
}

export default page
