import React, {useState, FC} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import mainStyles from './styles';
import CardData from '../types/CardData';
import Card from '../components/card';

const MainScreen: FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const addCard = () => {
    setCards([
      ...cards,
      {title: '', description: '', hobby: 'Reading', options: ['']},
    ]);
  };

  const copyCard = (index: number) => {
    const newCards = [...cards];
    const cardToCopy = { ...newCards[index], options: [...newCards[index].options] };
    newCards.splice(newCards.length, 0, cardToCopy);
    setCards(newCards);
  }

  const deleteCard = (index: number) => {
    if(cards.length > 1){
      const newCards = cards.filter((_, i) => i !== index);
      setCards(newCards);
    }
  };

  const updateCard = (index: number, updatedCard: CardData) => {
    const newCards = [...cards];
    newCards[index] = updatedCard;
    setCards(newCards);
  };

  const renderItem = ({ item, drag, getIndex }: RenderItemParams<CardData>) => (
    <View style={mainStyles.cardContainer}>
        <TouchableOpacity onLongPress={drag} style={mainStyles.dragButton}>
          <Text style={mainStyles.dragIcon}>::::</Text> {/* Drag Handle */}
        </TouchableOpacity>
      <Card
        data={item}
        index={getIndex() ?? -1}
        onCopy={copyCard}
        onDelete={deleteCard}
        onUpdate={updateCard}
      />
    </View>
  );
  

  return (
    <View style={mainStyles.container}>
      <DraggableFlatList
        data={cards}
        renderItem={renderItem}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={(_, index) => `card-${index}`}
        onDragEnd={({data}) => setCards(data)}
        keyboardShouldPersistTaps="handled" // Allow taps to propagate to child components
      />
      <TouchableOpacity onPress={addCard} style={mainStyles.addButton}>
        <Text style={mainStyles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
