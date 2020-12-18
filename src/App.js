import React, { useState } from 'react';
import FetchCharacters from './FetchCharacters'
import { Container, Table, Jumbotron, Row, Col } from 'react-bootstrap'
import Character from './Character'
import SearchForm from './SearchForm';
import './assets/footer.css';
import './assets/home.css';


function App() {

  const [params, setParams] = useState({})
  const { characters, loading, error } = FetchCharacters(params)

  //handle change in search parameters
  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  // footer html
  const renderFooter = <div className="footer">
            <div className="row">
                <div className="col-md-12 center">
                    <footer >
                        <h6> Shweta Rane  </h6>
                    </footer>
                </div>
            </div>
        </div>

  return (
    <Container className="my-4 home__container">
    <Jumbotron className="home__jumbotron">
    <Row>
      <Col>
        <h1 className="mb-4">Breaking Bad Characters</h1>
        <p>Look up your favorite Breaking bad characters...</p>
      </Col>
      
    </Row> 
    </Jumbotron>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <div className="overflow-auto">
        <Table responsive="lg">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Portrayed</th>
          <th>Status</th>
          <th>Occupation</th>
          <th>Image</th>
        </tr>
      </thead>
      {/* parse through the json reponse to display content on screen */}
        {characters.map((character,idx) => {
          return <Character key={idx} character={character} />
        })}
        </Table>
        {renderFooter}
      </div>
    </Container>
  )
}

export default App;
