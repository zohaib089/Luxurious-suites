import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Lorem Ipsum has been the industrys standard dummy text when an unknown printer took a galley of type and scramble'

            },
            {
                icon:<FaHiking/>,
                title:"Free Hikings",
                info:'Lorem Ipsum has been the industrys standard dummy text when an unknown printer took a galley of type and scramble'

            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Service",
                info:'Lorem Ipsum has been the industrys standard dummy text when an unknown printer took a galley of type and scramble'

            },
            {
                icon:<FaBeer/>,
                title:"Free Beers",
                info:'Lorem Ipsum has been the industrys standard dummy text when an unknown printer took a galley of type and scramble'

            }
        ]
    }
    render() {
        return (
            <section className="services">
                 <Title title="services"/>
                <div className="services-center">
               {this.state.services.map((item,i) => {
                  return <article key={i} className="service">
                      <span>
                          {item.icon}
                      </span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                  </article>
               })}
                </div> 
            </section>
        )
    }
}
