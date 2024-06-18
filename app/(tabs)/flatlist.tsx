
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

interface Item {
  id: string;
  title: string;
  icon: string;
  time: string;
  content: string;
}

const data: Item[] = [
  { id: '1', title: 'bước 1 xác định nhu cầu khách hàng, sắp hết hạn', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png', time: '10:00 AM',content:' content 1' },
  { id: '2', title: 'bạn có khách hàng mới', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png', time: '10:30 AM',content:'content 2' },
  { id: '3', title: 'khách hàng được chia sẻ sẽ bị trùng', icon: 'https://img.icons8.com/ios-filled/50/000000/phone.png', time: '11:00 AM',content:' content 3' },
  { id: '4', title: 'khách hàng được thêm bị trùng', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png', time: '11:30 AM',content:' content 4' },
  { id: '5', title: 'công việc sắp hết hạn hôm ay', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png', time: '12:00 PM',content:'content 5' },
  { id: '6', title: 'công việc đã quá hạn', icon: 'https://img.icons8.com/ios-filled/50/000000/user.png', time: '12:30 PM',content:' content 6' },
];

const App: React.FC = () => {
  // Hàm renderItem để render từng mục
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Image source={{ uri: item.icon }} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Thông báo</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0FFFF',
    flex: 1,
    marginTop: 50,
  },
  itemContainer: {
    width: Dimensions.get('window').width, // Tràn ra cả bên trái và phải
  },
  item: {
    marginTop:1,
    flexDirection: 'row',
    backgroundColor: '#CCFFFF',
    padding: 20,
    marginVertical: 1,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  time: {
    fontSize: 10,
    color: 'gray',
  },
  content:{
    fontSize:12,
  },
  header: {
    backgroundColor: '#E0FFFF	',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;

