import React, { Component } from 'react'
import Startwizard from './SingIn/Startwizard';

class SingIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      email: '',
      password: '',
    }
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }
  set = (key, value) => this.setState({ [key]: value })

  render() {
    const { step } = this.state
    switch (step) {
      case 1:
        <Step1 />
      default:
        <Startwizard />
    }
    return (
      <div>
        <Step1 />
      </div>
    )
  }
}

export default SingIn;

const Step1 = () => {
  return (
    <div>
      step 1
    </div>
  )
}

const Step2 = () => {
  return (
    <div>
      sttep 2
      </div>
  )
}

const Step3 = () => {
  return (
    <div>
      svsd
      </div>
  )
}

const Step4 = () => {
  return (
    <div>
      sasa
      </div>
  )
}

const Step5 = () => {
  return (
    <div>
      sasa
      </div>
  )
}
