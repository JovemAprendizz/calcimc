import { SafeAreaView, StyleSheet} from 'react-native';
import Title from '../../components/title';
import Form from '../../components/form/index'
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Title></Title>
      <Form></Form>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 30,
  },
});
