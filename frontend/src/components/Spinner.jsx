import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

export default function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}
