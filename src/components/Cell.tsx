import React, { useState } from "react";
import styled from "@emotion/styled";

export interface CellProps {
  isFilled: boolean;
  children?: string;
}

const CellItem = styled.span`
  background-color: ${(props: CellProps) =>
    props.isFilled ? 'darkgray' : 'white'};
  width: 50px;
  height: 50px;
  display: inline-block;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  margin: -1px 0 0 -1px;
  overflow: hidden;
  text-align: center;
`;

export const Cell: FC<CellProps> = ({ isFilled, children }) => {
  const [showingNum, setShowingNum] = useState(false);
  return (
    <CellItem
      data-testid="cell"
      isFilled={isFilled}
      onClick={() => setShowingNum(!showingNum)}
    >
      {showingNum ? children : ""}
    </CellItem>
  );  
};