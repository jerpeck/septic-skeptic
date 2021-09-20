import { React, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';

import theme from '../theme';

import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import ContentPage from './ContentPage';

// const data = {
//     hero: {
//         title: 'The Septic Skeptic',
//         description: 'Licensed, professional septic system inspection, installation, maintenance, and repair for Northern California.'
//     },
//     works: [],
//     aboutDescription: `Septic Skeptic is a family owned and operated company whose primary goal is to provide wastewater system owners effective, low cost solutions.  Our focus is delivering proven drainfield recovery,  treatment pond sludge reduction, and effluent quality management to meet regulatory compliance. The products and services we offer are the highest quality available. Results mean value...we have it and it costs less.\nThrough our industry relationships we are able to offer turnkey projects. From design and engineering to installation and maintenance, we can address wastewater issues in residential, domestic, commercial, agricultural, and municipal settings. Our philosophy is  to create the enhanced relationships between stakeholders that result in successful achievement of all parties needs. Water quality solutions do not have to come with high costs; in our economy it isn't feasible, nor is it necessary.`
// }

class SepticSkeptic extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            isLoading: true,
        }
        this.updateData = this.updateData.bind(this);
    }

    async updateData(){
        await axios.get('/siteData.json')
        .then((data) => {
            this.setState({data: data.data,
                 isLoading: false
                });
            console.log("SS.state: ", this.state);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    componentDidMount(){
        this.setState({isLoading: true});
        this.updateData();
    };

    render(){
            return(
                <div>
                    <ThemeProvider theme={theme} >
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    {!this.state.isLoading && <Landing data={this.state.data} />}
                                </Route>
                                <Route exact path="/about" >
                                    {!this.state.isLoading && <About title="About Us" data={this.state.data} />}
                                </Route>
                                <Route exact path="/contact">
                                    {this.state.data && this.state.data.length > 0 && <Contact data={this.state.data} />}
                                    {/* {!this.state.isLoading && <Contact data={this.state.data} />} */}
                                </Route>
                                <Route exact path="/services/:id" render={routeProps => (
                                    !this.state.isLoading && <ContentPage data={this.state.data} {...routeProps} />
                                )}/>
                            </Switch>
                        </Router>
                    </ThemeProvider>
                </div>
            )
        }
    }

export default SepticSkeptic;