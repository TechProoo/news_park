import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface crumbProp {
  content: string;
}

const BreadCrumb: React.FC<crumbProp> = ({ content }) => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography sx={{ color: "rgba(166, 0, 30, 0.48)", fontSize: "12px" }}>
          {content}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
