import { useRouter } from "next/router";

export default function Docs() {
  const { params = [] } = useRouter().query;

  if (params.length === 2) {
    return (
      <h1>
        Docs / {params[0]} / {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Docs / {params[0]}</h1>;
  }

  return <h1>Docs</h1>;
}
