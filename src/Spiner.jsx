import { Watch } from "react-loader-spinner";
const Spiner = () => {
  return (
    <Watch
      height="25%"
      width="25%"
      radius="48"
      color="#a2c523"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Spiner;
