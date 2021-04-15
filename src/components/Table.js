import React from "react";
import { MDBDataTable } from "mdbreact";

const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 200
      },
      {
        label: "Location",
        field: "city",
        sort: "asc",
        width: 150
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100
      },
      {
        label: 'Photo',
        field: 'photo',
        width: 100
      }
    ],
    rows: [
      {
        name: "Tiger Nixon",
        email: "tiger.nixon@example.com",
        phone: "903-962-7516",
        city: "Los Angeles",
        age: "26",
        photo: <img src="https://randomuser.me/api/portraits/med/men/40.jpg" className="img-fluid" alt="Tiger Nixon" />
      },
      {
        name: "Yuri Berry",
        email: "yuri.berry@example.com",
        phone: "251-981-9916",
        city: "New York",
        age: "50",
        photo: <img src="https://randomuser.me/api/portraits/med/men/5.jpg" className="img-fluid" alt="Yuri Berry" />
      },
      {
        name: "Caesar Vance",
        email: "caesar.vance@example.com",
        phone: "217-888-4561",
        city: "San Diego",
        age: "35",
        photo: <img src="https://randomuser.me/api/portraits/med/men/8.jpg" className="img-fluid" alt="Caesar Vance" />
      },
      {
        name: "Doris Wilder",
        email: "doris.wilder@example.com",
        phone: "703-251-1233",
        city: "Los Angeles",
        age: "38",
        photo: <img src="https://randomuser.me/api/portraits/med/women/40.jpg" className="img-fluid" alt="Doris Wilder" />
      },
      {
        name: "Angelica Ramos",
        email: "angelic.ramos@example.com",
        phone: "404-325-4458",
        city: "New York",
        age: "34",
        photo: <img src="https://randomuser.me/api/portraits/med/women/36.jpg" className="img-fluid" alt="Angelica Ramos" />
      },
      {
        name: "Gavin Joyce",
        email: "gavin.joyce@example.com",
        phone: "251-981-9916",
        city: "San Diego",
        age: "31",
        photo: <img src="https://randomuser.me/api/portraits/med/men/41.jpg" className="img-fluid" alt="Gavin Joyce" />
      },
      {
        name: "Jennifer Chang",
        email: "jennifer.chang@example.com",
        phone: "404-331-8978",
        city: "New York",
        age: "30",
        photo: <img src="https://randomuser.me/api/portraits/med/women/5.jpg" className="img-fluid" alt="Jennifer Chang" />
      },
      {
        name: "Brenden Wagner",
        email: "brendan.wagner@example.com",
        phone: "805-851-4456",
        city: "Los Angeles",
        age: "25",
        photo: <img src="https://randomuser.me/api/portraits/med/men/10.jpg" className="img-fluid" alt="Brendan Wagner" />
      },
      {
        name: "Fiona Green",
        email: "fiona.green@example.com",
        phone: "202-321-6030",
        city: "New York",
        age: "27",
        photo: <img src="https://randomuser.me/api/portraits/med/women/12.jpg" className="img-fluid" alt="Fiona Green" />
      },
      {
        name: "Grace Sanchez",
        email: "grace.sanchez@example.com",
        phone: "980-897-2132",
        city: "New York",
        age: "30",
        photo: <img src="https://randomuser.me/api/portraits/med/women/16.jpg" className="img-fluid" alt="Grace Sanchez" />
      },
      {
        name: "Michelle House",
        email: "michelle.house@example.com",
        phone: "454-741-8596",
        city: "San Diego",
        age: "33",
        photo: <img src="https://randomuser.me/api/portraits/med/women/20.jpg" className="img-fluid" alt="Michelle House" />
      },
      {
        name: "Suki Burks",
        email: "suki.burks@example.com",
        phone: "980-989-4563",
        city: "San Diego",
        age: "34",
        photo: <img src="https://randomuser.me/api/portraits/med/women/21.jpg" className="img-fluid" alt="Suki Burks" />
      },
      {
        name: "Mary Smith",
        email: "mary.smith@example.com",
        phone: "980-542-5879",
        city: "San Diego",
        age: "23",
        photo: <img src="https://randomuser.me/api/portraits/med/women/25.jpg" className="img-fluid" alt="Mary Smith" />
      },
      {
        name: "Gavin Cortez",
        email: "gavin.cortez@example.com",
        phone: "805-897-7745",
        city: "Los Angeles",
        age: "25",
        photo: <img src="https://randomuser.me/api/portraits/med/men/32.jpg" className="img-fluid" alt="Gavin Cortez" />
      },
  
      {
        name: "Hermione Butler",
        email: "hermione.butler@example.com",
        phone: "980-564-9754",
        city: "San Diego",
        age: "23",
        photo: <img src="https://randomuser.me/api/portraits/med/women/42.jpg" className="img-fluid" alt="Hermione Butler" />
      },
      {
        name: "Liam Greer",
        email: "liam.greer@example.com",
        phone: "221-225-2323",
        city: "New York",
        age: "39",
        photo: <img src="https://randomuser.me/api/portraits/med/men/75.jpg" className="img-fluid" alt="Liam Greer" />
      },
      {
        name: "Jonas Alexander",
        email: "jonas.alexander@example.com",
        phone: "805-331-1222",
        city: "Los Angeles",
        age: "45",
        photo: <img src="https://randomuser.me/api/portraits/med/men/99.jpg" className="img-fluid" alt="Jonas Alexander" />
      },
      {
        name: "Shad Decker",
        email: "shad.decker@example.com",
        phone: "804-568-9878",
        city: "Los Angeles",
        age: "29",
        photo: <img src="https://randomuser.me/api/portraits/med/men/98.jpg" className="img-fluid" alt="Shad Decker" />
      },
      {
        name: "Michael Bruce",
        email: "michael.bruce@example.com",
        phone: "805-331-1222",
        city: "New York",
        age: "31",
        photo: <img src="https://randomuser.me/api/portraits/med/men/97.jpg" className="img-fluid" alt="Michael Bruce" />
      },
      {
        name: "Donna Snider",
        email: "donna.snider@example.com",
        phone: "980-564-9656",
        city: "San Diego",
        age: "23",
        photo: <img src="https://randomuser.me/api/portraits/med/women/97.jpg" className="img-fluid" alt="Donna Snider" />
      }
    ]
  };

  export default function App() {
    return <MDBDataTable striped bordered hover data={data} />;
  }