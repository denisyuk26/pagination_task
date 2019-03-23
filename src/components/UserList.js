import React from "react";
import styled from "styled-components";


export default function UserList(props) {
  return (
    <UsersList>
      <TableHeader>
        <FullNameHeader>Name</FullNameHeader>
        <DescriptionHeader>Decription</DescriptionHeader>
      </TableHeader>
      {props.currentUsers.map(item => {
        const { id, name, surname, desc } = item;
        return (
          <UserCard key={id}>
            <FullName>{`${name} ${surname}`}</FullName>

            <Description>{desc}</Description>
          </UserCard>
        );
      })}
    </UsersList>
  );
}

//styles
const UsersList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
  min-height: 80vh;
  height: 100%;
`;
const UserCard = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  border-bottom: 1px dashed #5e5e5e;
  width: 75vw;
  padding: 20px;
  min-height: 10vh;
  height: 100%;
`;

const Description = styled.div`
  flex-basis: 85vw;
  font-size: 20px;
  text-align: justify;
  align-self: center;
`;

const FullName = styled.div`
  flex-basis: 18vw;
  font-size: 15px;
  align-self: center;
  text-align: center;
`;
const TableHeader = styled.li`
  display: flex;
  font-size: 18px;
  flex-direction: row;
  border-bottom: 1px dashed #5e5e5e;
`;
const FullNameHeader = styled.div`
  width: 13vw;
  text-align: center;
  padding-left: 20px;
`;
const DescriptionHeader = styled.div`
  padding-left: 5px;
`;