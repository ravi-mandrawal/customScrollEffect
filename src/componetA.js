import React, { useEffect, useState, useRef } from "react";

const NewComp = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  const getList = async (pageNumber) => {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${pageNumber}`
      );
      const response = await resp.json();
      setData((prevData) => [...prevData, ...response]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "400px", overflowY: "auto" }}>
      <h1 style={{ fontSize: "16px" }}>Total Item Count: {data.length}</h1>
      {data.map((item, index) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "0 10px",
          }}
        >
          <h2>{index}</h2>
          {/* <h2>{item.userId}</h2> */}
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NewComp;
