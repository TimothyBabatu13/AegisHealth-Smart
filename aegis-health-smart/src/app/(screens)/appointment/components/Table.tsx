import { Payment, columns } from "./TableColumn"
import { DataTable } from "./TableData"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: 'Dr. Alison Ogaga',
      type: 'General Practioner ',
      isActive: true,
      img: '/name....jpg',
      hospital: 'Cottage Medicare Hospital',
      address: '18 Iwaya Rd, Yaba 101245, Lagos',
      date: '6 Jul, 2023',
      time: '1:00 PM'
    },
    {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
      {
        id: "728ed52f",
        name: 'Dr.Jennifer Johnson',
        type: 'Primary Care Physician',
        isActive: true,
        img: '/name....jpg',
        hospital: 'Blue Cross Hospital',
        address: '48, Ijaiye road, Ogba, (Beside UBA, Ikeja)',
        date: '7 Jul, 2023',
        time: '10:00 AM'
      },
  ]
}

export default async function DemoPage() {
  const data = await getData()
  

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
