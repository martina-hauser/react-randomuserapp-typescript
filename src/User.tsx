import * as React from "react";

import "./styles.css";

export type UserProps = {
  firstName: string;
  lastName: string;
  photoUrl: string;
  photoSize?: number;
};

const User = ({
  firstName,
  lastName,
  photoUrl,
  photoSize = 128
}: UserProps) => {
  return (
    <React.Fragment>
      <h2>
        {firstName} {lastName}
      </h2>
      {photoUrl && (
        <img
          src={photoUrl}
          width={photoSize}
          height={photoSize}
          alt="profile"
        />
      )}
    </React.Fragment>
  );
};

export default User;
