import { Card, CardContent } from "@/components/ui/card"
import { GetAllPersonalInfo } from "@/services/dashbaord"


const UserDashBoardLayout = async() => {
  const result = await GetAllPersonalInfo()
  return (
    <div>
       <Card className="rounded-xl bg-muted  flex justify-center items-center">
        <CardContent className="text-center">
          <h2 className="text-2xl font-bold">Dashboard Insights</h2>
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
  )
}

export default UserDashBoardLayout