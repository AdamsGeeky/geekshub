import React from "react";
import { useSession } from "next-auth/react";
import  About  from "../About/about";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="text-center ">
      <h3 className="text-5xl  text-center font-bold text-green-900 dark:text-white md:text-3xl lg:text-4xl my-4">
      GeeksInk
      </h3>
      <p className="text-center">
      With GeeksInk, managing your GitHub repositories becomes effortless, efficient, and downright enjoyable
      </p>
      <div className=" w-full flex flex-col px-0 mx-0">
        <img className="h-96 my-10" src="./Open.svg" alt="" />
        <About />
      </div>
    </div>
  );
};

export default Home;
