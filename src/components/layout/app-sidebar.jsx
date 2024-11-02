
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import DeleteConfirmationModal from "@/pages/admin/components/DeleteConfirmationModal"

export function AppSidebar({screens, setCurrentNav, children}) {
  return (
    <Sidebar collapsible="icon" className="py-4">
      <div className="flex justify-end px-4">
        {children}
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl my-4">URS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {screens?.map((item) => (
                <SidebarMenuItem key={item.name} className="cursor-pointer">
                  <SidebarMenuButton asChild onClick={() => setCurrentNav(item.screen)}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <DeleteConfirmationModal/>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
