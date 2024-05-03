import { SafeAreaView, StyleSheet} from 'react-native';
import Title from './src/components/title';
import Form from './src/components/form/index'
export default function App() {
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
