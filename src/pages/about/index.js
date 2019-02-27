import React from 'react';
import Layout from '../../components/Layout';

export class About extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <section>
                        <h1>About</h1>
                        <p>Short description about AWWW.</p>
                    </section>
                </Layout>
            </div>
        );
    };
}

export default About;