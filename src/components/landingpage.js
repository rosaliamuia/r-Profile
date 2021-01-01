import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import logo2 from '../rosa2.png'

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                        src={logo2}
                        alt=" avatar image"
                        className= "avatar-img2"
                    />
                    

                    <div className="banner-text">
                        <h1> Web Developer</h1>

                        <hr/>

                        <p>HTML/ CSS | Bootstrap | JavaScript | YII2 | React | MongoDB</p>
                        <div className="social-links">

                            {/*LinkedIn */}
                            <a href="https://www.linkedin.com/in/rosalia-muia-6a87821a1/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/rosaliamuia" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://twitter.com/Rosa_112233" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-twitter-square" aria-hidden="true" />
                            </a>

                            {/* FreeCodeCamp */}
                            <a href="https://twitter.com/Rosa_112233" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-free-code-camp" aria-hidden="true" />
                            </a>


                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;