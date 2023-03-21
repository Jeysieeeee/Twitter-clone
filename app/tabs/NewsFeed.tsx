import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';


import { TwitterData } from '../../components/data';
import styles from '../../Style';
import TopBar from '../../navigation/TopBar';

const StickyHeader1 = () => {
    return (
            <View className=' flex-row justify-evenly pt-4 border-b-2 border-gray-300 bg-gray-100'>
                <View>
                <TouchableOpacity>
                    <Text className='text-lg font-bold pb-2'>For you</Text>
                </TouchableOpacity>
                <View className=" h-1 w-15 rounded-full bg-sky-600" />
                </View>
                <TouchableOpacity>
                    <Text className='text-lg font-bold pb-2'>Following</Text>
                </TouchableOpacity>
            </View>
           
    )
}
const StickyHeader2 = () => {
    return (
            <View className=' flex-row justify-evenly pt-4 border-b-2 border-gray-300 bg-gray-100'>
               
                <TouchableOpacity>
                    <Text className='text-lg font-bold pb-2'>For you</Text>
                </TouchableOpacity>
               
                <View>
                <TouchableOpacity>
                    <Text className='text-lg font-bold pb-2'>Following</Text>
                </TouchableOpacity>
                <View className="h-1 w-15 rounded-full bg-sky-600" />
                </View>
            </View>
           
    )
}

export const NewsFeed = () => {
    return (
        <View className='flex-1 back'>
            <Swiper index={0} showsPagination={false} loop={false}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} stickyHeaderIndices={[1]}>
                    <TopBar />
                    <StickyHeader1 />
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
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} stickyHeaderIndices={[1]}>
                    <TopBar />
                    <StickyHeader2 />
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
            </Swiper>
        </View>
    )
}
export default NewsFeed;