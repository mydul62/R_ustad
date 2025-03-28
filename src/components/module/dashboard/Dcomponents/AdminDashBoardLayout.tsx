import { Card, CardContent } from "@/components/ui/card"
import { GetAllInfoAdmin, GetAllPersonalInfo } from "@/services/dashbaord"

const AdminDashBoardLayout = async() => {
    const result = await GetAllPersonalInfo()
    const allInfo = await GetAllInfoAdmin()
    console.log(allInfo);
  return (
    <div>
       <Card className="rounded-xl bg-muted mt-4 flex justify-center items-center">
        <CardContent className="text-center">
          <h2 className="text-2xl font-bold">Dashboard Insights</h2>
        </CardContent>
      </Card>
     <div className="grid auto-rows-min mt-4 gap-4 md:grid-cols-3">
     <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalUsers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Research Members</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalResearchMembers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Blogs</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalBlogs}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Approved Papers</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalApprovedPapers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Pending Papers</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalPendingPapers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Research Papers</h2>
            <p className="text-3xl font-semibold">{allInfo?.data?.totalResearchPapers }</p>
          </CardContent>
        </Card>
       
      </div>
     
      <div>
       <Card className="rounded-xl bg-muted mt-4  flex justify-center items-center">
        <CardContent className="text-center">
          <h2 className="text-2xl font-bold">Personal Insights</h2>
        </CardContent>
      </Card>
     <div className="grid mt-4  gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="aspect-video  rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Approved Papers</h2>
            <p className="text-3xl font-semibold">{result?.data?.totalApprovedPapers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Pending Papers  </h2>
            <p className="text-3xl font-semibold">{result.data.totalPendingPapers}</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">
            Total Blogs</h2>
            <p className="text-3xl font-semibold">{result.data.totalBlogs}</p>
          </CardContent>
        </Card>
      </div>
     
    </div>
    </div>
  )
}

export default AdminDashBoardLayout