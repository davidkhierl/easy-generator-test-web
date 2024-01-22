import { NavLink } from '@/components/ui/nav-link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Home, Settings } from 'lucide-react'

export function Navigation({ className }: { className?: string }) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink href="/" icon={<Home className="h-4 w-4" />}>
            Home
          </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href="/settings" icon={<Settings className="h-4 w-4" />} catchAllSegments>
            Account
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
