# React Native Draggable Cards Application

## Overview
This application demonstrates a React Native implementation of draggable cards, which can be dynamically added, edited, copied, and deleted. Each card contains text fields, a dropdown to select a hobby, and dynamically manageable options. The application emphasizes modularity by separating reusable components, types, and styles for maintainability.

---

## File Structure

```
project-root/
├── components/
│   ├── Card.tsx
│   ├── CustomInput.tsx
│   └── Dropdown.tsx
├── screens/
│   └── MainScreen.tsx
├── styles/
│   ├── mainStyles.ts
│   └── styles.ts
├── types/
│   ├── CardData.ts
│   └── CardProps.ts
└── App.tsx
```

---

## Code Explanation

### **1. Main Screen**
File: `MainScreen.tsx`

This is the entry point where users interact with the cards. It manages the state of all cards and provides functionality to drag, add, copy, and delete cards.

#### Key Functionalities:

1. **State Management:**
   ```tsx
   const [cards, setCards] = useState<CardData[]>([]);
   ```
   - Stores an array of card data.
   - Type `CardData` defines the structure of a card (title, description, hobby, options).

2. **Add Card:**
   ```tsx
   const addCard = () => {
       setCards([...cards, { title: '', description: '', hobby: 'Reading', options: [''] }]);
   };
   ```
   - Adds a new blank card with default values.

3. **Copy Card:**
   ```tsx
   const copyCard = (index: number) => {
       const newCards = [...cards];
       const cardToCopy = { ...newCards[index], options: [...newCards[index].options] };
       newCards.splice(newCards.length, 0, cardToCopy);
       setCards(newCards);
   }
   ```
   - Duplicates a card at the specified index.

4. **Delete Card:**
   ```tsx
   const deleteCard = (index: number) => {
       const newCards = cards.filter((_, i) => i !== index);
       setCards(newCards);
   };
   ```
   - Removes a card based on its index.

5. **Update Card:**
   ```tsx
   const updateCard = (index: number, updatedCard: CardData) => {
       const newCards = [...cards];
       newCards[index] = updatedCard;
       setCards(newCards);
   };
   ```
   - Updates the data of a specific card.

6. **Draggable FlatList:**
   ```tsx
   <DraggableFlatList
       data={cards}
       renderItem={renderItem}
       keyExtractor={(_, index) => `card-${index}`}
       onDragEnd={({ data }) => setCards(data)}
   />
   ```
   - Implements draggable functionality for reordering cards.

---

### **2. Card Component**
File: `Card.tsx`

Handles the individual card UI and its internal state for options.

#### Props:
```ts
interface CardProps {
    data: CardData;
    index: number;
    onCopy: (index: number) => void;
    onDelete: (index: number) => void;
    onUpdate: (index: number, updatedCard: CardData) => void;
}
```
- **`data`**: Represents the current card's data.
- **`index`**: Position of the card in the list.
- **`onCopy`**, **`onDelete`**, **`onUpdate`**: Callback functions to interact with the card.

#### Key Features:

1. **Dynamic Options:**
   ```tsx
   const [options, setOptions] = useState<string[]>(data.options || ['']);
   ```
   - Manages the internal state of the card's options array.

2. **Reusable Input Rendering:**
   ```tsx
   const renderTextInput = (
       label: string,
       placeholder: string,
       field: keyof CardProps['data'],
       multiline?: boolean
   ) => (
       <CustomInput
           label={label}
           placeholder={placeholder}
           value={data[field] || ''}
           onChangeText={(text) => onUpdate(index, { ...data, [field]: text })}
           multiline={multiline}
       />
   );
   ```
   - Abstracts the logic for rendering input fields.

3. **Dropdown Integration:**
   ```tsx
   <Dropdown
       options={['Reading', 'Gaming', 'Sports']}
       selectedValue={data.hobby}
       onSelect={(value) => onUpdate(index, { ...data, hobby: value })}
   />
   ```
   - Allows the user to select a hobby.

4. **Option Management:**
   - Add, update, and delete options dynamically.

5. **Actions:**
   ```tsx
   <TouchableOpacity onPress={() => onCopy(index)}>
       <Text>Copy</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => onDelete(index)}>
       <Text>Delete</Text>
   </TouchableOpacity>
   ```
   - Buttons to copy and delete the card.

---

### **3. Reusable Components**

#### Custom Input:
File: `CustomInput.tsx`

- A generic input component for text fields.

#### Dropdown:
File: `Dropdown.tsx`

- A dropdown component that accepts `options` and a callback `onSelect`.

---

### **4. Types**

#### Card Data:
File: `CardData.ts`
```ts
interface CardData {
    title: string;
    description: string;
    hobby: string | null;
    options: string[];
}
```

Defines the structure of the card data used across the application.

---

## Example Usage

- **Adding a Card:** Click the `Add` button to create a new card.
- **Reordering Cards:** Long press and drag a card to change its order.
- **Editing a Card:** Modify fields like title, description, hobby, or options within a card.
- **Duplicating a Card:** Click the `Copy` button to replicate a card.
- **Deleting a Card:** Click the `Delete` button to remove a card.

---

## Styling

Styles are defined separately in `styles/mainStyles.ts` and `styles/styles.ts` for reusability and maintainability.
