import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

//Provider for allowing access to component tree 

class RoomProvider extends Component {
    state={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true
    }

formatData(items){
    let tempItems = items.map(item=>{
        let id  = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url)

    let room = {...item.fields,images,id}
    return room

    })
    return tempItems
}
// get data
componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room =>room.featured===true)
    this.setState({
        rooms,
        featuredRooms,sortedRooms:rooms,loading:false
    })
}
    render() {
        return <RoomContext.Provider value={{...this.state}}>
{this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext}