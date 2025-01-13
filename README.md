
# React Native Draggable Cards Application

## Overview
This React Native application demonstrates draggable cards that can be dynamically added, edited, copied, deleted, and reordered. Each card contains text fields for the title, description, a dropdown to select a hobby, and dynamically manageable options. The application emphasizes modularity by separating reusable components, types, and styles for maintainability.

## Features
- Add, copy, delete, and reorder cards.
- Edit text fields (title, description).
- Select a hobby from a dropdown list.
- Dynamically manage options for each card.
- Reusable components for input fields and dropdowns.

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

## Code Explanation

### **1. Main Screen**
**File:** `MainScreen.tsx`

This is the main screen of the application where users interact with the cards. It manages the state of all cards and provides functionality to add, copy, delete, and reorder the cards.

#### Key Functionalities:

1. **State Management:**
   ```tsx
   const [cards, setCards] = useState<CardData[]>([]);
   ```
   - Stores the array of cards.
   - `CardData` defines the structure of each card's data (title, description, hobby, options).

2. **Add Card:**
   ```tsx
   const addCard = () => {
       setCards([...cards, { title: '', description: '', hobby: 'Reading', options: [''] }]);
   };
   ```
   - Adds a new blank card to the list with default values.

3. **Copy Card:**
   ```tsx
   const copyCard = (index: number) => {
       const newCards = [...cards];
       const cardToCopy = { ...newCards[index], options: [...newCards[index].options] };
       newCards.splice(newCards.length, 0, cardToCopy);
       setCards(newCards);
   };
   ```
   - Duplicates a card at the specified index.

4. **Delete Card:**
   ```tsx
   const deleteCard = (index: number) => {
       const newCards = cards.filter((_, i) => i !== index);
       setCards(newCards);
   };
   ```
   - Removes a card at the specified index.

5. **Update Card:**
   ```tsx
   const updateCard = (index: number, updatedCard: CardData) => {
       const newCards = [...cards];
       newCards[index] = updatedCard;
       setCards(newCards);
   };
   ```
   - Updates the data for a specific card.

6. **Draggable FlatList:**
   ```tsx
   <DraggableFlatList
       data={cards}
       renderItem={renderItem}
       keyExtractor={(_, index) => `card-${index}`}
       onDragEnd={({ data }) => setCards(data)}
   />
   ```
   - Implements the draggable functionality to reorder cards.

### **2. Card Component**
**File:** `Card.tsx`

Handles the individual card UI and its internal state for options.

#### Key Features:

1. **Dynamic Options:**
   - The options for each card are stored as part of the card's data. Options can be dynamically added, updated, or removed.
   - The `Card` component manages the options internally and updates the parent component via the `onUpdate` function.

2. **Reusable Input Rendering:**
   ```tsx
   const renderTextInput = (label: string, placeholder: string, field: keyof CardProps['data'], multiline?: boolean) => (
       <CustomInput
           label={label}
           placeholder={placeholder}
           value={data[field] || ''}
           onChangeText={(text) => onUpdate(index, { ...data, [field]: text })}
           multiline={multiline}
       />
   );
   ```
   - Renders reusable input components for the title, description, and options.

3. **Dropdown Integration:**
   ```tsx
   <Dropdown
       options={['Reading', 'Gaming', 'Sports']}
       selectedValue={data.hobby}
       onSelect={(value) => onUpdate(index, { ...data, hobby: value })}
   />
   ```
   - Allows users to select a hobby.

4. **Option Management:**
   - Users can add, update, or remove options dynamically within a card.

5. **Actions:**
   ```tsx
   <TouchableOpacity onPress={() => onCopy(index)}>
       <Text>Copy</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => onDelete(index)}>
       <Text>Delete</Text>
   </TouchableOpacity>
   ```
   - Provides buttons to copy or delete the card.

### **3. Reusable Components**
#### Custom Input:
File: `CustomInput.tsx`
- A generic input component for text fields.

#### Dropdown:
File: `Dropdown.tsx`
- A dropdown component that allows users to select a hobby.

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
Defines the structure of card data used across the application.

## Example Usage
- **Adding a Card:** Click the `Add` button to create a new card.
- **Reordering Cards:** Long press and drag a card to change its order.
- **Editing a Card:** Modify fields like title, description, hobby, or options within a card.
- **Duplicating a Card:** Click the `Copy` button to replicate a card.
- **Deleting a Card:** Click the `Delete` button to remove a card.

## Styling
Styles are defined separately in `styles/mainStyles.ts` and `styles/styles.ts` for reusability and maintainability.
