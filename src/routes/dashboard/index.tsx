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

  const [viewState, setViewState] = React.useState<"own" | "other">("own");

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
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full">
        <Navbar />
      </div>

      <div className="flex h-full w-full items-center justify-center">
        {user !== null && userRecipes !== null && collectedRecipes !== null ? (
          <div className="h-[70%] w-[65%]">
            <div className="w-full">
              <div className="font-paytone-one text-[32px] font-normal">
                Hi, {user.username}!
              </div>
              <div>this is your recipe collection</div>
            </div>

            <span className="flex p-2">
              <div>
                {viewState === "own" ? (
                  <button
                    className="bg-10 p-2 font-lexend text-50"
                    onClick={() => setViewState("own")}
                  >
                    Own recipes
                  </button>
                ) : (
                  <button
                    className="bg-50 p-2 font-lexend text-40"
                    onClick={() => setViewState("own")}
                  >
                    Own Recipes
                  </button>
                )}
              </div>

              <div>
                {viewState === "other" ? (
                  <button
                    className="bg-10 p-2 font-lexend text-50"
                    onClick={() => setViewState("other")}
                  >
                    Other recipes
                  </button>
                ) : (
                  <button
                    className="bg-50 p-2 font-lexend text-40"
                    onClick={() => setViewState("other")}
                  >
                    Other Recipes
                  </button>
                )}
              </div>
            </span>

            <div>
              {userRecipes.results.forEach((element: any) => (
                <div>{element}</div>
              ))}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
