// Import everything needed to use the `useQuery` hook
import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_VEHICLES = gql`
  query AllVehicles {
    allVehicles {
    vehicles {
      id
      model
      costInCredits
      passengers
    }  
    }
  }
  `

function DisplayVehicles() {
  const { loading, error, data } = useQuery(GET_VEHICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //console.log(data)

  return data.allVehicles.vehicles.map(({ id, model, costInCredits, passengers }) => (
    <div key={id}>
      <h3>Hello would you like to buy a {model}</h3>
      <br />
      <b>About this vehicle:</b>
      <p>the price is ${costInCredits}</p>
      <p>the capacity is {passengers} people</p>
      <p><Link to={`/vehicles/${id}`}>click here to see all the details</Link></p>
      <br />
    </div>
  ));
}


export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayVehicles />
    </div>
  );
}