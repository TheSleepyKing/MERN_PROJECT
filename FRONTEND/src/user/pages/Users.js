import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jameel Seboa",
      image:
        "https://media-exp1.licdn.com/dms/image/D4D03AQGRdUNmYHjsyw/profile-displayphoto-shrink_800_800/0/1640185635393?e=1648080000&v=beta&t=fXuUeSs8mzMqbJ3yXY_uupjkLiRsOqIvknqa3tsM7SU",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
