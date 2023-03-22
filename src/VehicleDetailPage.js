import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const VehicleDetailPage = () => {

const { id } = useParams();

const GET_VEHICLE_DETAIL = gql`
  query VehicleDetail($vehicleId: ID) {
    vehicle(id: $vehicleId) {
      id
      model
      costInCredits
      passengers
    }  
  }
  `

    const { data, loading, error } = useQuery(GET_VEHICLE_DETAIL, {
        variables: { vehicleId: id },
    });

    if (error) return "error....";

    if (loading) return "loading ....";
  
    const vehicle = data.vehicle;
    return (
        <div><h2>VehicleDetailPage</h2>
        Some details for you....
        <h3>{vehicle.model}</h3>
        <h3>{vehicle.costInCredits}</h3>
        <h3>{vehicle.passengers}</h3>

        <Link to="/">Back to the list!</Link>
        </div>
    )
}
