import * as React from "react";
import {
  SideNavigation,
  SideNavigationItem
} from "@walmart-web/livingdesign-components";
import * as Icon from "@livingdesign/icons";
import { usePathname } from "next/navigation";


const links = [
  {name: 'Inicio', href: '/', icon: <Icon.Home/>},
  {name: 'Dashboards', href: '/dashboards',  icon: <Icon.Keyboard/>, children: [
    {name: 'Operaciones', href: '/dashboards/operaciones', icon: null},
    {name: 'Home Office', href: '/dashboards/operaciones', icon: null},
    {name: 'Legal', href: '/dashboards/operaciones', icon: null},
    {name: 'Auditoria', href: '/dashboards/operaciones', icon: null},
    {name: 'Compliance', href: '/dashboards/operaciones', icon: null},
    {name: 'Real State', href: '/dashboards/operaciones', icon: null},
  ]},
  {name: 'Contratos', href: '/contracts', icon: <Icon.Note />},
  {name: 'Mis Documentos', href: '/documents', icon: <Icon.Box />},
  {name: 'OnePage Approvex', href: '/onepage', icon: <Icon.ChevronRight />},
  {name: 'Engine Webdox', href: '/engine', icon: <Icon.ChevronRight />},
  {name: 'Opciones', href: '/settings', icon: <Icon.Wrench />},
]


export default () => {

  const currentPath = usePathname();

  return (
    <SideNavigation>

      {links.map(link => {
        const linkIcon = link.icon;

        return (
          <SideNavigationItem
            key={link.name}
            href={link.href}
            leading={link.icon}
            isCurrent={link.href == currentPath ? true : false}
          >
            {link.name}
          </SideNavigationItem>
        )
      })}

    </SideNavigation>
  );
}