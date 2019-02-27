import React from 'react'

import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'

export default class WorkIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
            <WorkRoll />
        </section>
      </Layout>
    )
  }
}
