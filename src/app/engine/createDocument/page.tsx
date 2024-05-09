"use client"

import {
  Card,
  Button,
  Select,
  TextField,
} from '@walmart-web/livingdesign-components';

import * as Icon from "@livingdesign/icons";

export default function CreateDocument() {
  return (<>
  
  <section className='flex flex-col gap-4 '>
    <h1>Formulario de Construcción de Documentos</h1>

    <Card className='p-4 grid'>
      <Button variant="primary">Crear un Nuevo Documento</Button>
      <Select size='small'></Select>
    </Card>

    <Card className="p-4">
      <TextField
        label="Email"
        leadingIcon={<Icon.Email />}
        // onChange={event => setValue(event.target.value)}
        size="small"
        type="text"
        // value={value}
      />
    </Card>

    <Card>
      <h3>Eventos</h3>
    </Card>
  </section>



  </>);
}