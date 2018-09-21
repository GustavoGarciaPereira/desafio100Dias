import React, {Component} from 'react'
import HomeCard from '../ui/HomeCard';

export default class Home extends Component {

    HomeCardReleases = {
        title: 'Releases1',
        text: 'Menage Releases1',
        action: () => alert("Apertou Botão1")        
    }
    HomeCardBecklog = {
        title: 'Becklog2',
        text: 'Menage Becklog2',
        action: () => alert("Apertou Botão2")        
    }
    HomeCardSprnts = {
        title: 'Sprnts3',
        text: 'Menage Sprnts3',
        action: () => alert("Apertou Botão3")        
    }
    render() {
        return (
            <div className="container text-conter">
                <div className="row">
                    <HomeCard title = {this.HomeCardReleases.title}
                    text = {this.HomeCardReleases.text}
                    action = {this.HomeCardReleases.action}/>
                    <HomeCard {...this.HomeCardBecklog}/>
                    <HomeCard {...this.HomeCardSprnts}/>                    
                </div>
            </div>
        );
    }
}
