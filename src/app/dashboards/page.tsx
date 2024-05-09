"use client"

import { Card } from '@walmart-web/livingdesign-components';

export default function Dashboards() {
  return (<>
  
    <h1>Dashboards</h1>

    <Card>
      <div>
        <h2>Seleccione un Dashboard</h2>
        <div>

        
          <h3>Dashboard Personas</h3>
          <iframe 
            src="https://app.powerbi.com/reportEmbed?reportId=b75c2af6-6e19-448d-9801-c8b3c6f0c016&autoAuth=true&ctid=3cbcc3d3-094d-4006-9849-0d11d61f484d"
            width={'100%'}
            height={500}
            frameborder="0"
          ></iframe>

          <h3>Dashboard Home Office</h3>
          <iframe 
            src="https://app.powerbi.com/reportEmbed?reportId=b75c2af6-6e19-448d-9801-c8b3c6f0c016&autoAuth=true&ctid=3cbcc3d3-094d-4006-9849-0d11d61f484d"            height={500}
            width={'100%'}
            height={500}
            frameborder="0">
          </iframe>

        </div>
      </div>
    </Card>


  </>
  );
}