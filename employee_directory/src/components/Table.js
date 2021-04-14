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
        email: "yuri.berry@example.com",
        phone: "805-851-4456",
        city: "Los Angeles",
        age: "25",
        photo: <img src="https://randomuser.me/api/portraits/med/men/10.jpg" className="img-fluid" alt="Brendan Wagner" />
      },
      {
        name: "Fiona Green",
        position: "Chief Operating Officer (COO)",
        office: "San Francisco",
        age: "48",
        date: "2010/03/11",
        salary: "$850"
      },
      {
        name: "Shou Itou",
        position: "Regional Marketing",
        office: "Tokyo",
        age: "20",
        date: "2011/08/14",
        salary: "$163"
      },
      {
        name: "Michelle House",
        position: "Integration Specialist",
        office: "Sidney",
        age: "37",
        date: "2011/06/02",
        salary: "$95"
      },
      {
        name: "Suki Burks",
        position: "Developer",
        office: "London",
        age: "53",
        date: "2009/10/22",
        salary: "$114"
      },
      {
        name: "Mary Smith",
        position: "Technical Author",
        office: "London",
        age: "27",
        date: "2011/05/07",
        photo: <img src="https://randomuser.me/api/portraits/thumb/women/5.jpg" className="img-fluid" alt="Mary Smith" />
      },
      {
        name: "Gavin Cortez",
        position: "Team Leader",
        office: "San Francisco",
        age: "22",
        date: "2008/10/26",
        salary: "$235"
      },
  
      {
        name: "Hermione Butler",
        position: "Regional Director",
        office: "London",
        age: "47",
        date: "2011/03/21",
        salary: "$356"
      },
      {
        name: "Lael Greer",
        position: "Systems Administrator",
        office: "London",
        age: "21",
        date: "2009/02/27",
        salary: "$103"
      },
      {
        name: "Jonas Alexander",
        position: "Developer",
        office: "San Francisco",
        age: "30",
        date: "2010/07/14",
        salary: "$86"
      },
      {
        name: "Shad Decker",
        position: "Regional Director",
        office: "Edinburgh",
        age: "51",
        date: "2008/11/13",
        salary: "$183"
      },
      {
        name: "Michael Bruce",
        position: "Javascript Developer",
        office: "Singapore",
        age: "29",
        date: "2011/06/27",
        salary: "$183"
      },
      {
        name: "Donna Snider",
        position: "Customer Support",
        office: "New York",
        age: "27",
        date: "2011/01/25",
        salary: "$112"
      }
    ]
  };

  export default function App() {
    return <MDBDataTable striped bordered hover data={data} />;
  }