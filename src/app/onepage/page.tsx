"use client"

import { Card, Button} from '@walmart-web/livingdesign-components';

export default function Page() {
  return <>
    <h1>OnePage Approvex</h1>


    <Card size='large'>      
      <div className='p-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquam odit officia quia sint omnis a natus tempora, nisi ipsam voluptates, incidunt reprehenderit atque alias earum nostrum eveniet recusandae corporis!</p>
      
        <Button>Volver</Button>
        <Button size="medium">Previsualizar</Button>
        <Button size="large" variant="primary">Guardar</Button>

        <Button variant="primary" isFullWidth>Enviar</Button>
        
      </div>      
    </Card>

  </>
}