import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { TwitterData } from '../../components/data';
import styles from '../../Style';
import TopBar from '../../navigation/TopBar';

export const NewsFeed = () => {
    return (        <View style={{ flex: 1, }}>
            <TopBar />
            <View style={styles.forYou}>
                <TouchableOpacity>
                <Text style={styles.topBarText}>For you</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.topBarText}>Following</Text>
                </TouchableOpacity>
         
            </View>
            <StatusBar style="auto" />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {TwitterData.map((listData, index) =>
                    <View key={index}
                        style={styles.FeedContainer} >
                        <View style={styles.dataContainer}>
                            <Image source={{ uri: listData.profilePicture }} style={styles.profilePictureStyle} />
                        </View>
                        <View style={styles.dataDetails}>
                            <View style={styles.styleName}>

                                <View style={styles.styleName}>
                                    <Text style={styles.dataName}>{listData.name}</Text>
                                    <Text style={styles.dataUserName}>{listData.userName}</Text>
                                    <Text style={styles.dataUserName}>•</Text>
                                    <Text style={styles.dataUserName}> {listData.time}</Text>
                                </View>

                                <View>
                                    <Entypo name="dots-three-vertical" size={10} color="#777" style={{ alignItems: 'center' }} />
                                </View>
                            </View>

                            <View>
                                <Text style={styles.contentText}>{listData.content}</Text>
                                {listData.contentImage &&
                                    <Image source={{ uri: listData.contentImage }} style={styles.imageContent} />
                                }
                            </View>
                            <View style={styles.interactions}>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <EvilIcons name="comment" size={24} color="black" />
                                    <Text>{listData.comment}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <EvilIcons name="retweet" size={24} color="black" />
                                    <Text>{listData.retweet}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <EvilIcons name="heart" size={24} color="black" />
                                    <Text>{listData.likes}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Feather name="bar-chart-2" size={15} color="black" />
                                    <Text>{listData.views}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <EvilIcons name="share-google" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}
export default NewsFeed;
