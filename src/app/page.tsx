"use client"

import React from 'react';
import Image from 'next/image'

import { 
  LivingDesignProvider,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
} from "@walmart-web/livingdesign-components";


import * as Icon from "@livingdesign/icons";
// import "@walmart-web/livingdesign/bogle/dist/Bogle.css";

import { Suspense } from 'react';
// import Card from './ui/CardExample'
import ListExample from './ui/ListExample';

function MenuButton({href, children}) {
  return (<>
      <Card size='small'>
        <a href={href} 
        className='hover:bg-slate-50 hover:cursor-pointer flex items-center flex-col p-5 gap-4'>
          <Icon.Article/>
          <span>{children}</span>
        </a>
      </Card>
  </>)
}


const menuButtons = [
  {name: 'Contratos', href:'/contratos'},
  {name: 'Mis Documentos', href:'/documents'},
  {name: 'Dashboards', href:'/dashboards'},
  {name: 'Engine', href:'/engine'},
  {name: 'Approvex', href:'/onepage'},
  {name: 'Revisiones', href:'/reviews'},
]

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {menuButtons.map(x => { return(
          <MenuButton href={x.href}>{x.name}</MenuButton>
        )})}
      </div>
    </>
  )
}
