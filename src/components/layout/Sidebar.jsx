import { Link, NavLink } from "react-router-dom"
import {
  Menu
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"

const Sidebar = ({screens, currentNav}) => {

  return (
    <>
        <nav className="flex flex-col lg:items-center lg:gap-6 lg:py-8 lg:px-10 lg:h-screen lg:sticky lg:top-0">
          <Sheet>
            <SheetTrigger asChild className="absolute left-[1rem] top-[0.7rem] lg:static">
              <Button size="icon" variant="outline" className="bg-primary border-none lg:mb-[3rem] lg:mt-[5rem]">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" bg-primary pl-0">
              <nav className="flex flex-col text-lg font-medium space-y-1">
                <img src="/images/fixedlah.png" alt="logo" className="w-[15rem] mx-auto my-[3rem]"/>
                {screens.map((screen, index) => {
                  const IconComponent = screen.icon;
                  return (
                      <Link
                          key={index}
                          // onClick={() => setNav(screen.screen)}
                          className={`flex items-center gap-4 pl-[3rem] lg:px-[3rem] rounded-tr-full rounded-br-full overflow-hidden py-[0.8rem] lg:py-[1.2rem] text-muted-foreground hover:bg-tertiary ${currentNav == screen.screen ? "navActive" : ""}`}
                      >
                      <IconComponent className="h-5 w-5"/>
                      <span className="text-gray-300 text-[1rem] text-nowrap lg:text-[1.2rem]">{screen.name}</span>
                      </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden lg:flex lg:flex-col lg:gap-6">
          {screens.map((screen, index) => {
              const IconComponent = screen.icon;
              return (
                  <TooltipProvider key={index}>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <NavLink
                                // onClick={() => setNav(screen.screen)}
                                className={`flex h-9 w-9 items-center justify-center rounded-lg text-black transition-colors hover:text-foreground md:h-8 md:w-8 ${currentNav == screen.screen ? "nav-active" : ""}`}
                                style={{
                                      "background": currentNav == screen.screen ? "#142e52" : "",
                                }}
                              >
                              <IconComponent className="h-5 w-5 icon-active"/>
                              <span className="sr-only">{screen.name}</span>
                              </NavLink>
                          </TooltipTrigger>
                          <TooltipContent side="right">{screen.name}</TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              )
          })}
          </div>

        </nav>
    </>
  )
}

export default Sidebar
