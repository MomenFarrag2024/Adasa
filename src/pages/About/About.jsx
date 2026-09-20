import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";

export default function About({data}) {

  return (
    <>
    <Sec1 />
    <Sec2 />
    <Sec3 data={data} />
    <Sec4 data={data} />
    </>
  )
}
