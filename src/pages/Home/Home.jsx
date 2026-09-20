import Sec1 from './components/sec1';
import Sec2 from './components/sec2';
import Sec3 from './components/sec3';
import Sec4 from './components/sec4';
import Sec5 from './components/sec5';

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