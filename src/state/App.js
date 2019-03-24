import React, { Component } from 'react'
import appContext from './appContext'

const { Provider } = appContext


class AppState extends Component {
  state = {
    query: {
      keywords: '',
      language: "BO:es:Bolivia:Espanol (Latinoamerica):67" // TODO: check that this value shows in TypeAhead 
    },
    filter: {
      minVolume: 0,
      maxVolume: 1000000,
      minAdwords: 0,
      maxAdwords: 100,
      minCPC: 0,
      maxCPC: 1000,
      filterKeys: '',
      eraseKeys: ''
    },
    serpData: [
      { key: '0', volume: 0, cpc: 0, competencia: 0, id: 0, content: "|" },
      { key: '1', volume: 0, cpc: 0, competencia: 0, id: 0, content: "|" }
    ],
    rankData: [
      {
        pos: 1,
        title: 'google.com',
        pda: '5.2',
        shares: 'https://www.google.com',
        url: 'https://www.google.com',
      },
      {
        pos: 2,
        title: 'facebook.com',
        pda: '5.2',
        shares: 'https://www.facebook.com',
        url: 'https://www.facebook.com',
      }
    ],
    stats: { total_count: '', results_time: '-' },
    article: {
      title: '',
      meta: '',
      text: ''
    }
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            setPair: this.setPair,
            toggle: this.toggle
          }
        }}
      >
        {this.props.children}
      </Provider>
    )
  }

  getSerpData = (payload) => {
    console.log('Put your axios call here, you dummy!', payload)
    this.getRankData(payload.keywords)
  }

  getRankData = (keywords) => {
    console.log('Put your axios call here, you dummy!', keywords)
  }

  setPair = (key, value) => {
    this.getSerpData(value)
    if (key === 'query') {
    }
    this.setState({ [key]: value })
  }

  toggle = (key) => {
    this.setState({ [key]: !this.state[key] })
  }
}

export default AppState;