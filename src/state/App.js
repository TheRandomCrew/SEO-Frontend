import React, { Component } from 'react'
import axios from 'axios';
import appContext from './appContext'

const { Provider } = appContext


class AppState extends Component {
  state = {
    query: {
      keywords: '',
      select: "BO:es:Bolivia:Espanol (Latinoamerica):67" // TODO: check that this value shows in TypeAhead 
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
      { key: '-', search_volume: 0, cpc: 0, competition: 0, id: 0, checked: false }
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
      title: [],
      meta: [],
      text: [],
      textHtml: ''
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

  serpAPI = async (data = { keywords: '', select: '' }) => {
    await axios({
      method: 'post',
      url: `http://server.borjamediavilla.com/api/serp`,
      data,
      crossdomain: true
    })
      .then(resp => {
        const { data } = resp.data
        console.log(resp.data)
        const { results, status } = data;
        const { serpKeywords } = results;
        const { related } = serpKeywords;
        if (status === 'ok' && related !== 'No data') {
          // const tableData = related;
          this.setState({
            ...this.state,
            serpData: related,
            filter: { keywords: data.keywords, filter: data.filter }
          })
        }
        else {
          console.error('bad serp response:', related)
          this.props.set({ error: 'bad serp response:' + related })
          this.setState({
            isLoading: false, error: 'bad serp response', showError: true
          })
        }
      })
      .catch(error => {
        console.error('serp api error' + JSON.stringify(error))
        this.setState({ isLoading: false, error })
      });
  }

  setPair = (key, value = { keywords: '' }) => {
    if (key === 'query') {
      this.serpAPI(value)
    }
    this.setState({ [key]: value })
  }

  toggle = (key) => {
    this.setState({ [key]: !this.state[key] })
  }
}

export default AppState;