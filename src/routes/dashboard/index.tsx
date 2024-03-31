import axios from "axios";
import { Navbar } from "../../components/Navbar";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Dashboard() {
  const [cookie] = useCookies(["auth"]);

  const [user, setUser] = React.useState<any | null>(null);
  const [userRecipes, setUserRecipes] = React.useState<any | null>(null);
  const [collectedRecipes, setCollectedRecipes] = React.useState<any | null>(
    null,
  );

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/", {
        headers: {
          Authorization: `Token ${cookie.auth}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((reason) => console.log(reason));
  }, []);

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/user/", {
        headers: {
          Authorization: `Token ${cookie.auth}`,
        },
      })
      .then((response) => {
        setUserRecipes(response.data);
        console.log(response.data);
      })
      .catch((reason) => console.log(reason));

    axios
      .get("http://127.0.0.1:8000/api/recipes/collections/", {
        headers: {
          Authorization: `Token ${cookie.auth}`,
        },
      })
      .then((response) => {
        setCollectedRecipes(response.data);
        console.log(response.data);
      })
      .catch((reason) => console.log(reason));
  }, [user]);

  return (
    <div className="h-full w-full">
      <Navbar />


      <div>
        

      </div>

      {/*     

      <div className="text-10">
        {user === null ? <div>Loading...</div> : JSON.stringify(user)}
      </div>

      <div className="text-20">
        {userRecipes === null ? (
          <div>Loading...</div>
        ) : (
          JSON.stringify(userRecipes)
        )}
      </div>

      <div className="text-30">
        {collectedRecipes === null ? (
          <div>Loading...</div>
        ) : (
          JSON.stringify(collectedRecipes)
        )}
      </div> */}
    </div>
  );
}
