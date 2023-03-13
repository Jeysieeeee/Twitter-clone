import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions, } from 'react-native';
import styles from '../Style';
import { profileData } from '../data'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useRouter } from 'expo-router';

export const Profile = () => {
    const router = useRouter()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: Dimensions.get('window').height * .5 }}>
                <View style={{ flex: 1, position: 'relative' }}>
                    <Image source={{ uri: 'https://i.pinimg.com/originals/5b/ce/df/5bcedf0159b8568134abcdee481f6c56.jpg' }}
                        style={{ width: '100%', height: '100%' }} />
                    <TouchableOpacity style={styles.arrowBack}
                        onPress={() => router.push('/tabs/NewsFeed/')}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                    <TouchableOpacity style={{ position: 'relative', alignSelf: 'flex-end', top: 80, right: 10, }}>
                        <Text style={styles.editProfile}>Edit profile</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: 'https://ca.slack-edge.com/T01J5LD19ML-U04QPUPK4SV-0f1d231bbb5d-512' }}
                        style={styles.myProfilePicture} />
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>ginkarla</Text>
                        <Text style={styles.userCompleteName}>@JeanGuarra{'\n'}</Text>
                        <Text>We are born only to die {'\n'}</Text>
                    </View>
                    <View style={styles.userJoined}>
                        <EvilIcons name="location" size={18} color="black" />
                        <Text style={styles.userCompleteName}>Daet, Bicol Region </Text>
                        <AntDesign name="calendar" size={15} color="#666" />
                        <Text style={styles.userCompleteName}> Joined August 2020 {'\n'}</Text>
                    </View>
                    <View style={styles.userFollows}>
                        <Text style={styles.follows}>45</Text>
                        <Text> Following    </Text>
                        <Text style={styles.follows}>202</Text>
                        <Text> Followers </Text>
                    </View>
                </View>

                <View style={styles.tweetActions}>
                    <Text style={styles.tweetActionsText}>Tweets</Text>
                    <Text style={styles.tweetActionsText}>Tweets & replies</Text>
                    <Text style={styles.tweetActionsText}>Media</Text>
                    <Text style={styles.tweetActionsText}>Likes</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewProfile}>
                {profileData.map((listData, index) => <View style={styles.profileFeedContainer}
                    key={index}>
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
                                <Image source={{ uri: listData.contentImage }} style={styles.imageContent} />}
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

        </View >
    )


}
export default Profile;