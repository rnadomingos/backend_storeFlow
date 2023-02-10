import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../../css/searchBox.css';

function SearchBox({url}) {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/${url}?keyword=${keyword}`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <div className='searchBox'>
            <Form onSubmit={submitHandler} className="input-group">
                <Col sm="5">
                    <Form.Control
                        type='text'
                        name='q'
                        onChange={(e) => setKeyword(e.target.value)}
                        className='form-control mr-sm-2'
                    ></Form.Control>
                </Col>
                <Button
                    type='submit'
                    variant='secondary'
                    className='btn btn-secondary'
                >
                    <i className="fas fa-search"></i>
                </Button>
            </Form>
        </div>
    )
}

export { SearchBox }