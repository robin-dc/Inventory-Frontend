import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { admin } from "@/constants"

const Admin = () => {
  return (
    <SidebarProvider>
      <AppSidebar screens={admin}/>
      <main>
        <SidebarTrigger />
        <div className="p-8">
          Admin UI
        </div>
      </main>
    </SidebarProvider>
  )
}

export default Admin
