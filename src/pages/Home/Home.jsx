import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';

export default function Home({ data }) {
  return (
    <>
      <Sec1 />
      <Sec2 data={data} />
      <Sec3 data={data} />
      <Sec4 data={data} />
      <Sec5 data={data} />
    </>
  );
}
