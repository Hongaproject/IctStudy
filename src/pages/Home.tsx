import Button from "../component/Button";

const Home = () => (
  <div>
    <h1>welcome to our website</h1>
    <Button
      label="console.log띄우기"
      onClick={() => {
        alert("welcome to our website");
      }}
    />
  </div>
);

export default Home;
