import styled from "styled-components";
import { Image } from "./Image";
import { Nav } from "./Navigate";
import { Link } from "./Link";
import { Button } from "./Button";
import { ESize, EVariation } from "./IUi/TButton";
import AvatarUser from "../Features/Login/AvatarUser";
import { useIsAuth } from "../Features/Login/useIsAuth";
import useLogout from "../Features/Login/useLogout";

const Header = styled.header`
  padding: 4rem 4.6rem;
  height: 12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-600);
  text-align: center;
`;

export const ContentHeader = function () {
  const { user } = useIsAuth();
  const { logoutFunc } = useLogout();

  const handleLogout = function () {
    logoutFunc();
  };

  return (
    <Header>
      <Nav>
        <li>
          <Link to="/">All Tours</Link>
        </li>
      </Nav>
      <Image src="/logo-white.png" alt="Natours logo" height="5rem" />
      <Nav>
        {
          <li>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Button
                $variation={EVariation.danger}
                size={ESize.medium}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            )}
          </li>
        }
        {!user ? (
          <li
            style={{
              outline: "1px solid var(--color-grey-300)",
              padding: "0.8rem 1.2rem",
              borderRadius: "100rem",
            }}
          >
            <Link to="/signUp">Sign-up</Link>
          </li>
        ) : (
          <li>
            <AvatarUser
              photo={user?.photo ?? user?.data.data.users.photo}
              name={user?.name ?? user?.data.data.users.name}
            />
          </li>
        )}
      </Nav>
    </Header>
  );
};
