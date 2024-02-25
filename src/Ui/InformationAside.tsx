import styled from "styled-components";
import { NavUl } from "./Navigate";
import { LuBriefcase, LuCreditCard, LuSettings, LuStar } from "react-icons/lu";
import { InformationLink } from "./Link";
import { ERow } from "./IUi/TRow";

const Navbar = styled.aside`
  background-image: linear-gradient(
    to right bottom,
    var(--color-secondary),
    var(--color-primary)
  );
  padding: 6rem 0;
`;
const NavList = styled.li`
  display: flex;
  transition: all 0.5s;

  gap: 3.2rem;
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--color-grey-0);
  letter-spacing: 1px;

  & svg {
    font-size: 3rem;
    margin-left: 6rem;
  }
`;

const InformationAside = () => {
  return (
    <Navbar>
      <NavUl direction={ERow.vertical}>
        <NavList>
          <InformationLink to={"information"}>
            <LuSettings />
            <span>Settings</span>
          </InformationLink>
        </NavList>
        <NavList>
          <InformationLink to={"bookings"}>
            <LuBriefcase />
            <span>My bookings</span>
          </InformationLink>
        </NavList>

        {/* not done yet */}
        <NavList>
          <InformationLink to={"/#"}>
            <LuStar />
            <span>My reviews</span>
          </InformationLink>
        </NavList>

        {/* not done yet */}
        <NavList>
          <InformationLink to={"/#"}>
            <LuCreditCard />
            <span>billing</span>
          </InformationLink>
        </NavList>
      </NavUl>
    </Navbar>
  );
};

export default InformationAside;
