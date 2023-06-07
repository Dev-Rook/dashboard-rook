// Styles Import:
import "../styles/global.scss";



// Component Import:
import Head from "../components/Head";
import Billboard from "../components/Billboard"

// Section Import:
import Categories from "../sections/Categories";


const Index = () => {
  // Header Props:
  const title = "Contact List";
  const image = "";
  return (
    <div className="page">
      <Head />
      <Billboard title={title} image={image} />
      <Categories />
    </div>
  );
};

export default Index;