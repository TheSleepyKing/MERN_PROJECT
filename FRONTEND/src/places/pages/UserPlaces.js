import React from "react";

import PlaceList from "../components/PlaceList";
const DUMMY_PLACES =[
    {
    id: "p1",
    title:"Empire State Building",
    description:"One of the most famous buildings in America",
    imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg",
    address:"20 W 34th St, New York, NY 10001",
    location: {
        lat: 40.7484405,
        lng: 73.9856644
    },
    creator: "u1",
    },
    {
        id: "p2",
        title:"Empire State Building",
        description:"One of the most famous buildings in America",
        imageUrl:"https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg",
        address:"20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: 73.9856644
        },
        creator:"u2",
        }
]
const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES}/>
};

export default UserPlaces;