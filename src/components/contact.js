import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent} from 'react-mdl';
import logo from '../rosa.jpg'

class Contact extends Component {
    render() {
        return(
         <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Rosalia Kaluki</h2>
                    <img
                        src={logo}
                        alt="avatar"
                        style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a full stack developer, having worked on various projects. I am also an expert in web-design and also very familiar with developing the back-end of systems. I have created various projects including a venues system, job search system, library management system to help meet both client's needs and fill present gaps. This is just a few of my success stories as a web developer and currently working on other innovative solutions.

                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>

                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                                +254 725 685 545
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-fax" aria-hidden="true"></i>
                                +254 739 730 345
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                rosaliakaluki@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className="fab fa-skype"></i>
                                live:.cid.67415b12bbfc3ab6
                            </ListItemContent>
                        </ListItem>

                        
                    </List>
                    </div>
                </Cell>
            </Grid>
         </div>
        )
    }
}

export default Contact;