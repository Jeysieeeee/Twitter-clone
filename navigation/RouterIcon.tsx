import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const RouterIcon = ({color, name}) =>{
    if (name === 'NewsFeed') 
     return <Entypo name="home" size={24} color={color} />
    if (name === 'Search')
    return  <Feather name="search" size={24} color={color}/>
    if (name === 'Record')
    return  <MaterialIcons name="fiber-smart-record" size={24} color={color}/>
    if (name === 'Notification')
    return  <Ionicons name="ios-notifications-outline" size={24} color={color} />
    if (name === 'Message')
    return <Feather name="mail" size={24} color={color} />
}