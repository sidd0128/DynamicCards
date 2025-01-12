import CardData from './CardData';

interface CardProps {
    data: CardData;
    index: number;
    onCopy: (index: number) => void;
    onDelete: (index: number) => void;
    onUpdate: (index: number, updatedCard: CardData) => void;
  }
  export default CardProps;
