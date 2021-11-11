import React, { FC } from "react";
import styled from "@emotion/styled";

import { Cell } from "./Cell"

export interface FieldProps {
  cellsArray: Array<Array<1 | 0>>;
}

const RowStyled = styled.div`
  height: 50px;
`;

export const Field: FC<FieldProps> = ({ cellsArray }) => {
  let cellNum = 0;
  return(
    <div>
      {cellsArray?.map((row, iRow) => (
        <RowStyled key={iRow}>
          {row.map((cellsFill, iCol) => {
            return (
              <Cell
                isFilled={Boolean(cellsFill)}
                children={++cellNum}
                key={`${iRow}_${iCol}`}
              />
            );
          })}
        </RowStyled>
      ))}
    </div>
  );
}; 
