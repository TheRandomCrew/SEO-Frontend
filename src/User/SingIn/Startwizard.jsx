import React, { Component } from 'react'
import { Button, Jumbotron } from "react-bootstrap";

export default class Startwizard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    // back = (e) => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }
    handleChange = (_e, { name, value }) => {
        const currentCurrency = this.props.values.currencyRates.filter(rate => rate.value === value)
        this.props.set(name, currentCurrency[0].value)
    }
    render() {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}
