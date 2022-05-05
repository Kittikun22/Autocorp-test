import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Content, Header } from '../styled/layoutStyle'
import firebase from '../config'
import { serverTimestamp } from 'firebase/firestore'

function Calculate() {
    const [Start, setStart] = useState(0)
    const [End, setEnd] = useState(0)
    const [PrimeArr, setPrimeArr] = useState([])
    const [showPrime, setshowPrime] = useState()
    const [showCnt, setshowCnt] = useState()
    const firebaseRef = firebase.firestore().collection('History')

    function isPrime(num) {
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
                return false;
        return num > 1;
    }

    const checkNumber = (e) => {
        e.preventDefault();
            for (let i = Start; i <= End; i++) {
                if (isPrime(i)) {
                    console.log(i + ' is Prime');
                    PrimeArr.push(i)
                }
            }
            setshowPrime(`${PrimeArr}`)
            setshowCnt(`${PrimeArr.length}`)
            firebaseRef.doc().set({
                start: `${Start}`,
                end: `${End}`,
                prime: `${PrimeArr}`,
                cntprime: `${PrimeArr.length}`,
                timestamp: serverTimestamp()
            }).then(setPrimeArr([]))
        

    }


    return (
        <Container>
            <Header>
            <h1>Prime number Calculate</h1>
            </Header>
            <Form onSubmit={checkNumber}>
                <Form.Group controlId='Start'>
                    <Form.Label>Start</Form.Label>
                    <Form.Control type="number" min={10} max={999} onChange={e => setStart(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId='End'>
                    <Form.Label>End</Form.Label>
                    <Form.Control type="number" min={11} max={1000} onChange={e => setEnd(e.target.value)} required />
                </Form.Group>
                <Button variant="success" block="block" type="submit" style={{marginLeft:"40%", marginTop:"20px"}}>
                    Calculate
                </Button>
            </Form>
            
            <Content>
            <div>Prime count is : {showCnt}</div>
            <div>Prime number is : {showPrime}</div>
            </Content>
        </Container>
    )
}

export default Calculate