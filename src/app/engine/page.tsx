"use client"

import Link from "next/link";

import { Button } from '@walmart-web/livingdesign-components';

export default function Engine() {
  return(<>
  
    <h1>Engine</h1>

    <Button href='/engine/createDocument'>Crear Documento</Button>
    <Button href='/engine/newDocument'>Nuevo Documento</Button>


  </>);
}