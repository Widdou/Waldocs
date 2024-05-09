"use client"

import * as React from "react";
import { 
  Card, 
  CardHeader,
  CardContent,
  Button,
  ButtonGroup,
  TextField,
  TextArea,
  DatePicker,
  Select,
  Checkbox,
} from '@walmart-web/livingdesign-components';

interface OnePageSection {
  label: string;
  fields: OnePageField[];
}

enum InputFieldTypes {
  TEXT= 'text',
  NUMBER= 'number',
  TEXTAREA= 'textarea', 
  SELECT= 'select', 
  CHECKBOX= 'checkbox', 
  DATE= 'date', 
  FILE= 'file',
  TABLE= 'table'
}

interface OnePageField {
  name: string;
  label: string;
  type: 'text'|'number'|'textarea'|'select'|'checkbox'|'date'|'file'|'table';
  value?: any;
  props?: {
    size: 'small' | 'large';
  }
}

interface OnePageProject {
  info: {
    id: string;
    status: number;
    statusId: number; 
    gerencia: string;

  }

}

const formSchema : OnePageSection[] = [
  {
    label: 'Información - Detalles Generales del Proyecto', 
    fields: [
      {name: 'godate', label: 'Gerencia', type: 'date'},
      {name: 'capex', label: 'Área', type: 'number'},
      {name: 'tir', label: 'Nombre Gerente Responsable', type: 'number'},
      {name: 'tir', label: 'Correo Gerente Responsable', type: 'text'},
      {name: 'vpsponsor', label: 'VP Sponsor', type: 'number'},
      {name: 'godate', label: 'Fecha Presentación', type: 'date'},
      {name: 'capexType', label: 'Tipo CAPEX', type: 'select'},
      {name: '', label: 'Numero Local', type: 'number'},
      {name: 'ceco', label: 'CECO Depreciación', type: 'number'},
      {name: '', label: 'Formato / Unidad de Negocio', type: 'number'},
      {name: '', label: 'Nombre Jefe Proyecto', type: 'number'},
      {name: '', label: 'Correo Jefe Proyecto', type: 'text'},
    ]
  },
  {
    label: 'Detalles del Proyecto',
    fields: [
      {name: '', label: 'Descripción del Proyecto', type: 'textarea'},
      {name: '', label: 'Necesidad del Negocio', type: 'textarea'},      
    ]
  },
  {
    label: 'Especificaciones', 
    fields: [
      {name: 'godate', label: 'Go-Date', type: 'date'},
      {name: 'capex', label: 'CAPEX', type: 'number'},
      {name: 'tir', label: 'TIR', type: 'number'},
      {name: 'npv', label: 'NPV', type: 'date'},
      {name: '', label: 'CAPEX Eff.', type: 'number'},
      {name: '', label: 'Fecha Post-Audit', type: 'date'},
      {name: '', label: 'OPEX', type: 'number'},
      {name: '', label: 'ROI Año', type: 'number'},
      {name: '', label: 'ROI Valor', type: 'number'},
      {name: '', label: 'Payback', type: 'number'},
      {name: '', label: 'Otro', type: 'text'},
    ]
  },
  {
    label: 'Infraestructura',
    fields: [
      {name: '', label: 'Infraestructura CAPEX', type: 'date'},
      {name: '', label: 'Tipo', type: 'select'},
      {name: '', label: 'Vida Útil', type: 'number'},
      {name: '', label: 'OI Infraestructura', type: 'number'},      
    ]
  },
  {
    label: 'Equipamiento',
    fields: [
      {name: '', label: 'Equipamiento CAPEX', type: 'date'},
      {name: '', label: 'Tipo', type: 'select'},
      {name: '', label: 'Vida Útil', type: 'number'},
      {name: '', label: 'OI Equipamiento', type: 'number'},      
    ]
  },
  {
    label: 'Mejoras Municipales',
    fields: [
      {name: '', label: 'Mejoras Municipales CAPEX', type: 'date'},
      {name: '', label: 'Tipo', type: 'select'},
      {name: '', label: 'Vida Útil', type: 'number'},
      {name: '', label: 'OI Mejoras Municipales', type: 'number'},      
    ]
  },
  {
    label: 'Write-Offs & OPEX',
    fields: [
      {name: '', label: 'Write-off Infraestructura', type: 'text'},
      {name: '', label: 'Write-off Equipamiento', type: 'text'},
      {name: '', label: 'Nombre del Proyecto Offset', type: 'text'},
      {name: '', label: 'Depreciación Anual', type: 'number'},      
      {name: '', label: 'Multas Sanciones y Donaciones', type: 'text'},
      {name: '', label: 'Total OPEX', type: 'select'},      
      {name: '', label: 'Cuenta Contable OPEX', type: 'number'},      
      {name: '', label: 'Cuenta Contable OPEX', type: 'select'},      
    ]
  },  
  {
    label: 'Tablas',
    fields: [
      
    ]
  },
  {
    label: 'Archivos adjuntos & Documentación',
    fields: [
      
    ]
  },
  {
    label: 'Selección de Aprobadores',
    fields: [
      {name: '', label: 'Gerente Ejecutor', type: 'select'},
      {name: '', label: 'Gerente Formato', type: 'select'},
      {name: '', label: 'Gerente Primera Linea', type: 'select'},
      {name: '', label: 'Otros Aprobadores', type: 'select'},
      
    ]
  }
]

// const project = {} as OnePageProject

// project.info.gerencia = 'Roto';

export default function Page() {

  return <>

    <section className='flex flex-col gap-4'>

      <Card size='large'>      
        <div className='p-5 flex flex-col gap-3'>

          <p>La idea es poder construir el formulario, con su respectivo manejo de estados (CREATE/EDIT) 
            desde un esquema, que incorpore ya las caracteristicas de cada input sin necesidad de especificarlos
            individualmente en el documento, para que se mapee a lo que espera el backend
          </p>

          <a className='text-blue-600'
          href="https://dev.to/pranavb6/how-to-dynamically-render-forms-from-a-schema-using-react-typescript-and-react-hook-form-pph">
            Tutorial de referencia
            </a>

          <Button variant="primary" isFullWidth>Enviar</Button>
          
        </div>
      </Card>

      <Card className='flex justify-between items-center p-4'>
        <Select 
          label="Seleccionar Proyecto Forecast"
          size="small"
          className="max-w-[450px]"></Select>

        <Checkbox label="Sólo OPEX"></Checkbox>
      </Card>

      {formSchema.map(section => {
        return(
          <Card size="small" className="p-1">
            <CardHeader title={section.label}/>

            <CardContent className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>

            {section.fields.map(field => {
              return <OnePageInputField field={field}/>
            })}

            </CardContent>
            </Card>
        );
      })}

    </section>

    <section className="flex flex-col gap-4 mt-6">
      <hr />
      <h1>Ejemplo: Campos declarados manualmente, más parecido a como se realizó en SHP</h1>
      <Card size="small" className="p-1">
        <CardHeader title="Información - Detalles Generales del Proyecto">
        </CardHeader>

        <CardContent className='grid grid-cols-2 gap-4'>
          
          <TextField
            label="Gerencia"
            size='small'
          />

          <TextField
            label="Área"
            size='small'
          />

          <TextField
            label="Nombre Gerente Responsable"
            size='small'
          />

          <TextField
            label="Correo Gerente Responsable"
            size='small'
          />

          <TextField
            label="VP Sponsor"
            size='small'
          />

        </CardContent>
      </Card>

      <ButtonGroup className='justify-end flex'>
        <Button size="medium" variant='tertiary'>Guardar Borrador</Button>
        <Button size="medium" variant="primary" >Guardar</Button>
        <Button size="medium">Enviar</Button>
      </ButtonGroup>

    </section>

  </>
}


function OnePageInputField(props) {

  const [value, setValue] = React.useState("");

  switch(props.field.type) {
    case "text": {
      return <TextField 
        label={props.field.label}
        onChange={event => setValue(event.target.value)}
        size= "small"
        type="text"
        value={value}
      />
      break;
    }
    case "number": {
      return <TextField 
        label={props.field.label}
        onChange={event => setValue(event.target.value)}
        size= "small"
        type="number"
        value={value}
      />
      break;
    }
    case "textarea": {
      return <TextArea 
        label={props.field.label}
        onChange={event => setValue(event.target.value)}
        maxLength={500}
        placeholder="Write a log entry…"
        size="large"
        value={value}
      />; 
      break;
    }
    // case "date": {
    //   return <DatePicker  
    //     label="(dd/MM/yyyy)"
    //     // onChange={event => setValue(event.target.value)}
    //     renderError={() =>
    //       "Utilice el formato requerido dd/MM/yyyy"
    //     }
    //     size="small"
    //     value={value}
      
    //   />;
    //   break;
    // }
    case "select": {
      return <Select
        label={props.field.label}
        size="small"
      />
    }
    default:
      return <TextField 
        label={props.field.label}
        onChange={event => setValue(event.target.value)}
        size= "small"
        value={value}
      />;
  }

}

/*
{
	"info": {
		"status": 0,
		"statusId": 0,
		"id": 0,
		"gerencia": "",
		"area": "",
		"projectResponsibleName": "",
		"projectResponsibleMail": "",
		"sponsor": "",
		"tipoCAPEX": "",
		"local": "",
		"fechaPresentacion": "",
		"CECO": "",
		"formato": "",
		"onlyOPEX": 0,
		"projectChiefName": "",
		"projectChiefEmail": ""
	},
	"detalles": {
		"descripcion": "",
		"necesidad": "",
		"otros": ""
	},
	"metricas": {
		"godate": "",
		"review": "",
		"OPEX": "",
		"TIR": "",
		"ROI_YEAR": "",
		"ROI_VALUE": "",
		"NPV": "",
		"CAPEX_EFF": "",
		"payback": "",
		"otros": ""
	},
	"inversion": {
		"infraestructura_TotalCAPEX": "",
		"infraestructura_Tipo": "",
		"infraestructura_VidaUtil": "",
		"infraestructura_OI": "",
		"infraestructura_WriteOff": "",
		"equipamiento_TotalCAPEX": "",
		"equipamiento_Tipo": "",
		"equipamiento_VidaUtil": "",
		"equipamiento_OI": "",
		"equipamiento_WriteOff": "",
		"mejorasMuni_TotalCAPEX": "",
		"mejorasMuni_Tipo": "",
		"mejorasMuni_VidaUtil": "",
		"mejorasMuni_OI": "",
		"totalOPEX": "",
		"cuentaContableOPEX": "",
		"multasInfraccionesDonaciones": "",
		"incluidoPlanCAPEX": "",
		"depreciacionAnual": "",
		"proyectoOffsetNombre": "",
		"proyectoOffsetTipoCAPEX": ""
	},
	"tablas": {
		"BusinessCase": [],
		"ProfitLossMensual": [],
		"KeySuccessFactors": []
	},
	"aprobadores": {
		"primeraLinea": "",
		"segundaLinea": "",
		"terceraLinea": "",
		"cuartaLinea": ""
	},
	"attachments": {
		"files": null,
		"minutes": null,
		"minutesFile": null,
		"attachedFile": null,
		"approbationEBS": null,
		"financialEvaluation": null,
		"projectPresentation": null
	}
}

*/