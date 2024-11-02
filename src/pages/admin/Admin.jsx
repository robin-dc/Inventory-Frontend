import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { admin } from "@/constants"
import { useState } from "react"
import Dashboard from "./tabs/Dashboard"
import ItemManagement from "./tabs/ItemManagement"
import UserManagement from "./tabs/UserManagement"
import History from "./tabs/History"

const Admin = () => {
  const [currentNav, setCurrentNav] = useState("Dashboard")

  return (
    <SidebarProvider>
      <AppSidebar screens={admin} setCurrentNav={setCurrentNav}>
        <SidebarTrigger />
      </AppSidebar>
      <main className="bg-[#F5F5F7] w-full">
        <div className="p-8">
          {
            currentNav === "Dashboard" ? <Dashboard/> :
            currentNav === "ItemManagement" ? <ItemManagement/> :
            currentNav === "UserManagement" ? <UserManagement/> :
            currentNav === "History" ? <History/> : null
          }
        </div>
      </main>
    </SidebarProvider>
  )
}

export default Admin
