import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import styled from 'styled-components';

const MyNavLink = styled(NavLink)`
  color: white;
`;

export const StyledNavLink: React.FunctionComponent<NavLinkProps> = ({...rest}) => {

  return (
    <MyNavLink {...rest}/>
  );
};
