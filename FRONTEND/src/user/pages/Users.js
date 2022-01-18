import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jameel Seboa",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQHS4X_4Nt21CA/profile-displayphoto-shrink_200_200/0/1598813199748?e=1639612800&v=beta&t=EIvl_Egl6ua8ibDbVoZQd8hQy-_LY1xWAImWD7Qzezc",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
