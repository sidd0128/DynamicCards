import React, { useState, FC } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import mainStyles from './styles';
import CardData from '../types/CardData';
import Card from '../components/card';

const MainScreen: FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = () => {
    setCards([...cards, { title: '', description: '', hobby: null, options: [''] }]);
  };

  const copyCard = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index + 1, 0, { ...cards[index] });
    setCards(newCards);
  };

  const deleteCard = (index: number) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  const updateCard = (index: number, updatedCard: CardData) => {
    const newCards = [...cards];
    newCards[index] = updatedCard;
    setCards(newCards);
  };

  const renderItem = ({ item, drag, getIndex }: RenderItemParams<CardData>) => (
    <TouchableOpacity onLongPress={drag}>
      <Card
        data={item}
        index={getIndex() ?? -1}
        onCopy={copyCard}
        onDelete={deleteCard}
        onUpdate={updateCard}
      />
    </TouchableOpacity>
  );

  return (
    <View style={mainStyles.container}>
      <DraggableFlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(_, index) => `card-${index}`}
        onDragEnd={({ data }) => setCards(data)}
      />
      <TouchableOpacity onPress={addCard} style={mainStyles.addButton}>
        <Text style={mainStyles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
