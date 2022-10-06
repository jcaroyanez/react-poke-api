import { useRoutes } from "react-router-dom";
import PokeList from './components/poke-list/index/ListPoke';
import DetailPoke from './components/detail-list/index/DetailPoke';
import Container from './shared/container/Container';

function App() {
  /*const routes = useRoutes([
    {
      path: '/',
      element: <PokeList />
    },
    {
      path: 'list',
      element: <PokeList />
    },
    {
      path: 'detail/:name',
      element: <DetailPoke />
    }
  ]);*/

  return (
    <>
      {/* <div className={classes['container']}> */}
        <Container>
          {routes}
        </Container>
      {/* </div> */}
    </>
  )
}

export default App;
