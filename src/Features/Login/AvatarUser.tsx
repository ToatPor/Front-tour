import { Row } from "../../Ui/Row";
import { EGap, ERow } from "../../Ui/IUi/TRow";
import { Image } from "../../Ui/Image";
import { FC } from "react";
import { TAvatar } from "../../Services/IService/TUser";
import { Link } from "../../Ui/Link";

const AvatarUser: FC<TAvatar> = function (props) {
  const { photo, name } = props;
  return (
    <Link to={"/information"}>
      <Row direction={ERow.horizontal} $gap={EGap.medium}>
        <Image
          src={`http://localhost:8000/img/User/${photo}`}
          height="4.7rem"
          radius="100rem"
        />
        <p
          style={{
            color: "var(--color-grey-100)",
            textTransform: "uppercase",
            fontSize: "1.4rem",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          {name.split(" ")[0]}
        </p>
      </Row>
    </Link>
  );
};

export default AvatarUser;
