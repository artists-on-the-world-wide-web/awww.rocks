import React from 'react';
import Layout from '../../components/Layout';

export class About extends React.Component {
    render() {
        return (
            
            <Layout>
                <section className="about-container">
                    <div className="about-01">
                        <h1>AWWW_About us</h1>
                        <p>Jelly beans tootsie roll cake tootsie roll macaroon. Jelly danish cake jujubes. Tart chocolate cake dragée topping marzipan sweet dessert candy. Apple pie cotton candy tart. Tart oat cake chocolate jelly fruitcake. Oat cake sweet roll lollipop carrot cake jelly-o chupa chups fruitcake. Macaroon jelly icing pie. Sesame snaps liquorice gingerbread chocolate bar tart jelly gummies cake biscuit. Lemon drops liquorice tiramisu candy canes dessert tootsie roll. Cake liquorice muffin lollipop. Jelly beans cake topping dessert cupcake tootsie roll apple pie. Caramels cake lollipop. Jelly beans lollipop chocolate cake oat cake tootsie roll dragée.</p>
                        <p>Halvah cookie caramels pudding ice cream chocolate cake. Lemon drops chocolate cake chocolate bar pastry fruitcake ice cream. Fruitcake sugar plum dragée jelly-o chupa chups lemon drops jujubes gummi bears. Macaroon pudding wafer bonbon bonbon donut. Apple pie cupcake dessert tootsie roll fruitcake liquorice cheesecake pastry. Cake donut pastry. Apple pie sweet roll topping chocolate cake chocolate. Soufflé sugar plum jujubes cupcake dessert jelly-o. Jujubes brownie bear claw. Sweet roll powder cotton candy muffin lollipop marzipan macaroon tart cake. Croissant ice cream wafer jelly-o liquorice. Danish lemon drops pastry caramels.</p>
                    </div>
                    <div className="about-01-image"><span>About Image</span></div>
                    <div className="about-mural"><span>MURAL GOES HERE!</span></div>
                    <div className="about-members-photo">
                        <h1>Member</h1>
                        <div className="about-members-photo-container">
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                            <div className="members-photo"></div>
                        </div>
                        
                    </div>
                    <div className="about-members-description" style={{ paddingTop:"60px" }}>
                        <h1>Name</h1>
                        <p>
Marshmallow candy liquorice. Bear claw cotton candy bonbon apple pie fruitcake chocolate bar. Soufflé apple pie cotton candy chupa chups brownie cheesecake cupcake candy. Pie sesame snaps chocolate.</p>
                    </div>
                </section>
            </Layout>
            
        );
    };
}

export default About;