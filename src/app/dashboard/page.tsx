import ActivityOverview from "@/components/dashboard/ActivityOverview"
import MainActions from "@/components/dashboard/MainActions"
import WelcomeSection from "@/components/dashboard/WelcomeSection"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection  />
      <MainActions />
      <ActivityOverview />
    </>
  )
}
export default page