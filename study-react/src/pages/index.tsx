import type { NextPage } from "next";
import { Template } from "src/components/templates";
import { Top } from "src/components/organisms/Top";

const Home: NextPage = () => {
  return (
    <Template title="test">
      <Top />
    </Template>
  );
};

export default Home;
