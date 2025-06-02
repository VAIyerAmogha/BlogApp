import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setmenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => {
            setmenu("All");
          }}
          className={
            menu === "All" && "bg-black text-white py-1 px-4 rounded-sm"
          }
        >
          All
        </button>
        <button
          className={
            menu === "Technology" && "bg-black text-white py-1 px-4 rounded-sm"
          }
          onClick={() => {
            setmenu("Technology");
          }}
        >
          Technology
        </button>
        <button
          className={
            menu === "Startup" && "bg-black text-white py-1 px-4 rounded-sm"
          }
          onClick={() => {
            setmenu("Startup");
          }}
        >
          Startup
        </button>
        <button
          className={
            menu === "Lifestyle" && "bg-black text-white py-1 px-4 rounded-sm"
          }
          onClick={() => {
            setmenu("Lifestyle");
          }}
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
