"use client";

import { Button } from "@mui/material";

export default function UpdateButton() {
  //   );

  const handleClick = () => {
    console.log("update");
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick} disabled={false}>
        Update
      </Button>
    </>
  );
}
