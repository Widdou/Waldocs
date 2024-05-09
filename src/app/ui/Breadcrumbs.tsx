import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem
} from "@walmart-web/livingdesign-components";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {

  const currentPath = usePathname();

  const links = currentPath.split('/').map((x,i, arr) => {
    return {
      name: i == 0 ? 'Inicio' : x.toUpperCase(),
      href: i == 0 ? '/' : `${arr.slice(0,i+1).join('/')}`,
      isCurrent: i+1 == arr.length ? true : false
    }
  });

  // Don't return breadcrums at index
  if(currentPath == '/') return(<></>)

  return(<>
  
  <Breadcrumb className="mb-4">
    {links.map(link => {
      return (
          <BreadcrumbItem 
            href={link.href}
            isCurrent={link.isCurrent}
          >
            {link.name}
          </BreadcrumbItem>

      );
    })}
  </Breadcrumb>

  </>)
}
    