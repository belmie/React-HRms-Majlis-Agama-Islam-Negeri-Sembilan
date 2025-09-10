import React from "react";
import { formatDate } from "../utils/dateFormatter";

type Props = {
  checkerDate: string | Date;
};

const DateDisplay: React.FC<Props> = ({ checkerDate }) => {
  return <span>{formatDate(checkerDate)}</span>;
};

export default DateDisplay;
