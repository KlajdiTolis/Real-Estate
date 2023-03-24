import React, { FC } from "react";
import SearchPlace from "./SearchPlace";

interface Props {
  panTo: any;
}

const Filters: FC<Props> = ({ panTo }) => {
  return (
    <div>
      <SearchPlace panTo={panTo} />
    </div>
  );
};

export default Filters;
