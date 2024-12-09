import { ChartNoAxesCombined, DoorOpen, SquareActivity } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem} from "./sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

const items = [
  {
    title: "Home",
    url: "#",
    icon: DoorOpen
  },
  {
    title: "US S&P500 Stocks",
    url: "#",
    icon: SquareActivity,
    subs: [
      {
        title: "NASDAQ Stocks",
        url: "#"
      },
      {
        title: "NIKKEI Stocks",
        url: "#"
      },
      {
        title: "Stock Exchange of Mauritius",
        url: "#"
      },
    ]
  },
  {
    title: "Index Stocks",
    url: "#",
    icon: ChartNoAxesCombined,
    subs: [
      {
        title: "S&P 500",
        url: "#"
      },
      {
        title: "Shanghai Index",
        url: "#"
      },
      {
        title: "Tokyo Index",
        url: "#"
      },
    ]
  },
]

export function AppSidebar() {
  return(
    <Sidebar className="sd-bg z-50">
      <SidebarHeader/>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-xl mb-3">LeFinance</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
              <Collapsible defaultOpen className="group/collapsible" key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="w-5 h-5"/>
                          <span className="hover:underline">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                    {/* start iteration of children */}
                    {item.subs?.map((sub) => (
                      <SidebarMenuSub key={sub.title}>
                        <SidebarMenuSubItem>
                          <a href={sub.url}>
                            <span className="hover:underline">{sub.title}</span>
                          </a>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                    </CollapsibleContent>
                  </SidebarMenuItem>
              </Collapsible>
              ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}