import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {Avatar} from "@nextui-org/react";


const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarContent className="sm:hidden pr-3 ml-8 mr-2" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Product ShowCase</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 ml-0 pl-0" justify="start">
        <NavbarBrand className='mr-48 pr-3'>
          <AcmeLogo />
          <p className="font-bold text-inherit">Product ShowCase</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            All Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Spotlight
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=' w-20 h-12 flex'>
          <Avatar 
            isBordered color="primary" 
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d" 
            className='w-8 h-8 mt-2 ml-5 '
            />
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default MyNavbar