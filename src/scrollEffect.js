import React, { useEffect, useRef, useState } from "react";
const ScrollFunction = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const apiListing = async (pageNumber) => {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageNumber}`
      );
      const response = await resp.json();
      setData((prevData) => [...prevData, ...response]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    apiListing(page);
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
    <div
      ref={containerRef}
      style={{ height: "400px", overflow: "auto", border: "1px solid red" }}
    >
      <h1>Total Item : {data?.length}</h1>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              margin: "0 0 10px 0",
              padding: "10px",
            }}
          >
            <p>{index}</p>
            <p>{item?.title}</p>
          </div>
        );
      })}
      {loading && (
        <div>
          <h3>Loading....</h3>
        </div>
      )}
    </div>
  );
};

export default ScrollFunction;
