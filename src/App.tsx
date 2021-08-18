import * as React from "react";
import $ from "jquery";

import "./styles.css";
import User, { UserProps } from "./User";
import Button from "@material-ui/core/Button";

interface UserData {
  results: [
    {
      name: {
        first: string;
        last: string;
      };
      picture: {
        large: string;
      };
    }
  ];
}

export default function App() {
  const [user, setUser] = React.useState<UserProps | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const gender = e.currentTarget.dataset.gender;

    $.ajax({
      url: `${window.ReactApp.profileAPI}?gender=${gender}`,
      dataType: "json",
      success: function (data: UserData) {
        const { name, picture } = data.results[0];
        setUser({
          firstName: name.first,
          lastName: name.last,
          photoUrl: picture.large
        });
      }
    });
  };

  return (
    <div className="App">
      <h1>Welcome</h1>

      <Button
        data-gender="random"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Click to load next User
      </Button>

      {user && (
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          photoUrl={user.photoUrl}
          photoSize={128}
        />
      )}
    </div>
  );
}
