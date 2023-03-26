import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from "@mui/material";

export const VehicleDetailPage = () => {

const { id } = useParams();

const GET_VEHICLE_DETAIL = gql`
  query VehicleDetail($vehicleId: ID) {
    vehicle(id: $vehicleId) {
      id
      model
      costInCredits
      passengers
      pilotConnection {
        pilots {
          id
          name
          homeworld  {name} 
        }
      }
    }  
  }
  `

    const { data, loading, error } = useQuery(GET_VEHICLE_DETAIL, {
        variables: { vehicleId: id },
    });

    if (error) return "error....";

    if (loading) return "loading ....";
  
    const vehicle = data.vehicle;
    const pilots = vehicle.pilotConnection.pilots;

    return (
        <div><h2>VehicleDetailPage</h2>
        Some details for you....
        <h3>{vehicle.model}</h3>
        <h3>{vehicle.costInCredits}</h3>
        <h3>{vehicle.passengers}</h3>

        {pilots.length>0 && <h2>Known Pilots</h2>}
        <List>
        {pilots.map((pilot, i) => (
        <ListItem key={i}>
          <ListItemText
            primary={`Name: ${pilot.name}`}
            secondary={`Homeworld: ${pilot.homeworld.name} miles`}
          />
        </ListItem>
      ))}
    </List>   <Link to="/">Back to the list!</Link>
        </div>
    )
}
