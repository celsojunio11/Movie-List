import { StyleSheet, Text, View } from 'react-native';
import utils from '../../utils/utils';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { SearchInput } from '../../components/SearchInput';
import { api } from '../../services/api';
import { ModalView } from '../../components/modal/ModalView';
import { Modal } from '../../components/modal/Modal';

export interface SearchModalMovie {
  id: number,
  poster_path: string
}

export default function Home() {

  const [search, setSearch] = useState("");
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [movie, setMovie] = useState<SearchModalMovie[]>([]);

  async function SearchMovies() {
    try {
      const response = await api.get(utils.api.searchUrl, {
        params: {
          query: search
        }
      })

      setMovie(response.data.results);
      setSearchModalVisible(true);

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>

      <Header />

      <SearchInput
        onSearch={SearchMovies}
        handleChangeSearch={(text) => setSearch(text)}
      />

      <ModalView
        closeModal={() => setSearchModalVisible(false)}
        visible={searchModalVisible}
      >
        <Modal
          movies={movie}
        />
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.colors.black_light,

  },
});
