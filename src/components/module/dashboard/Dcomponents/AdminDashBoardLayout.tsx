import { Card, CardContent } from "@/components/ui/card"

const AdminDashBoardLayout = () => {
  return (
    <div>
     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="aspect-video rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Research Papers</h2>
            <p className="text-3xl font-semibold">120</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-3xl font-semibold">450</p>
          </CardContent>
        </Card>
        <Card className="aspect-video rounded-xl bg-muted flex flex-col justify-center items-center">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold">Graph</h2>
            <p className="text-sm">(Graph Placeholder)</p>
          </CardContent>
        </Card>
      </div>
      <Card className="rounded-xl bg-muted mt-4 flex justify-center items-center">
        <CardContent className="text-center">
          <h2 className="text-2xl font-bold">Dashboard Insights</h2>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashBoardLayout