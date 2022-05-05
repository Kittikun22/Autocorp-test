import React, { useState, useEffect } from 'react'
import { Container, Header, Td,Thead } from '../styled/layoutStyle'
import firebase from '../config'
import Table from 'react-bootstrap/Table'

function History() {
  const [History, setHistory] = useState([]);
  const [Loading, setLoading] = useState(false);
  const firebaseRef = firebase.firestore().collection("History");

  useEffect(() => {
    function getHistory() {
      setLoading(true);
      firebaseRef.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setHistory(items);
        setLoading(false);
      });
    }
    getHistory();
  }, []);
  console.log(History);


  const renderHistory = () => {
    return (
      <Container >
        <Table striped bordered hover size='lg'>
          <Thead>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Prime Count</th>
              <th>Prime Number</th>
              <th>Timestamp</th>
            </tr>
          </Thead>
          <tbody>
            {History.map((item, i) => (
              <tr key={i}>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.cntprime}</td>
                <Td>{item.prime}</Td>
                <td>{`${item.timestamp.toDate()}`}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    );
  };

  return (

    <Container>
      <Header>
        <h1>History</h1>
      </Header>
      <div>{renderHistory()}</div>
    </Container>
  )
}

export default History