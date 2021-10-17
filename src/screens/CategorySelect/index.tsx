import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closedSelectCategory: () => void;
}


export function CategorySelect({
  category,
  setCategory,
  closedSelectCategory,
}: Props) {

  function handleCategorySelect(category: Category){
    setCategory(category);
  }

  return(
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key}
        renderItem={(({item}) =>
          <Category
            onPress={(O) => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button
          title='Selecionar'
          onPress={closedSelectCategory}
        />
      </Footer>
    </Container>
  );
}