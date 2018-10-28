import React from 'react';
import styled from 'styled-components';

const TeamTable = styled.table`
  text-align: center;
`;

const TeamTableHeader = () => 
  <thead>
    <tr>
      <th>MIN</th>
      <th>FGM/FGA</th>
      <th>FG%</th>
      <th>FTM/FTA</th>
      <th>FT%</th>
      <th>3PM</th>
      <th>REB</th>
      <th>AST</th>
      <th>STL</th>
      <th>BLK</th>
      <th>TO</th>
      <th>PTS</th>
    </tr>
  </thead>
;

export default function Team() {
  return (
    <TeamTable>
      <TeamTableHeader />
    </TeamTable>
  )
}

// Team.propTypes = {
//   teamStats: PropTypes.object,
// };
