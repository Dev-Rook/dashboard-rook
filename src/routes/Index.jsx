// Styles Import:
import "../styles/global.scss";

// Component Import:
import Billboard from "../components/Billboard";

// Section Import:
import Categories from "../sections/Categories";
import Tasks from "../sections/Tasks";

const Index = () => {
  // Billboard Props:
  const title = "Dash Rook";
  const image = "";
  return (
    <div className="page">
      <Billboard title={title} image={image} />
      <Categories />
      <Tasks />
    </div>
  );
};

export default Index;
