import data from "../../data.json";

const Home = () => {
  console.log(data);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
};

export default Home;
