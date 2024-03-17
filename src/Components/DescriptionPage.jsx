import { Link } from "react-router-dom";

function DescriptionPage({ cardDesc }) {
  const { description } = cardDesc;
  return (
    <section className="desc-page">
      <Link
        to={-1}
        style={{
          textDecoration: "none",
          color: "red",
        }}>
        {"<="} Click Here Back To Home Page
      </Link>
      <p
        style={{
          color: "#0075ff",
          fontSize: "25px",
        }}>
        Card Description: {description}
      </p>
    </section>
  );
}

export default DescriptionPage;
