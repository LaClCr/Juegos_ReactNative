
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const grid = Array(10)
  .fill('')
  .map(() => Array(10).fill(''));

const words = [
  { word: 'software', direction: 'vertical' },
  { word: 'repoleved', direction: 'vertical' },
  { word: 'system', direction: 'horizontal' },
  { word: 'ppa', direction: 'horizontal' },
  { word: 'phone', direction: 'diagonal' },
  { word: 'elibom', direction: 'diagonal_inverted' }, 
];

function placeWordsInGrid(words, grid) {
  let doesNotFit = false;
  for (const wordObj of words) {
    let fits = true;
    let attempts = 100;
    do {
      const word = wordObj.word;
      const direction = wordObj.direction;
      const len = word.length;

      if (direction === 'horizontal') {
        const row = Math.floor(Math.random() * (10 - len + 1));
        const col = Math.floor(Math.random() * 10);

        for (let i = 0; i < len; i++) {
          if (grid[row + i][col] !== '' && grid[row + i][col] !== word[i])
            fits = false;
        }
        if (fits) {
          for (let i = 0; i < len; i++) {
            grid[row + i][col] = word[i];
          }
        }
      } else if (direction === 'vertical') {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * (10 - len + 1));

        for (let i = 0; i < len; i++) {
          if (grid[row][col + i] !== '' && grid[row][col + i] !== word[i])
            fits = false;
        }
        if (fits) {
          for (let i = 0; i < len; i++) {
            grid[row][col + i] = word[i];
          }
        }
      } else if (direction === 'diagonal') {
        const row = Math.floor(Math.random() * (10 - len + 1));
        const col = Math.floor(Math.random() * (10 - len + 1));
        for (let i = 0; i < len; i++) {
          if (
            grid[row + i][col + i] !== '' &&
            grid[row + i][col + i] !== word[i]
          )
            fits = false;
        }
        if (fits) {
          for (let i = 0; i < len; i++) {
            grid[row + i][col + i] = word[i];
          }
        }
      } else if (direction === 'diagonal_inverted') {
        const row = Math.floor(Math.random() * (10 - len + 1));
        const col = Math.floor(Math.random() * len) + (len - 1);
        for (let i = 0; i < len; i++) {
          if (
            grid[row + i][col - i] !== '' &&
            grid[row + i][col - i] !== word[i]
          )
            fits = false;
        }
        if (fits) {
          for (let i = 0; i < len; i++) {
            grid[row + i][col - i] = word[i];
          }
        }
      }
      attempts--;
    } while (!fits && attempts > 0);
    if (!fits) doesNotFit = true;
  }
  if (doesNotFit) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid[i][j] = '';
      }
    }
    placeWordsInGrid(words, grid);
  }
}

export default function Screen2() {
  const [showSoup, setShowSoup] = useState(false);

  const [randomLetters, setRandomLetters] = useState(() => {
    placeWordsInGrid(words, grid);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (grid[row][col] === '') {
          const randomLetter =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          grid[row][col] = randomLetter;
        }
      }
    }
    return grid;
  });

  const [cellBackgrounds, setCellBackgrounds] = useState(() => {
    const arr = Array(10)
      .fill('white')
      .map(() => Array(10).fill('white'));
    return arr;
  });

  const handleTitlePress = () => {
    setShowSoup(true);
  };

  const handlePress = (row, col) => {
    const updatedCellBackgrounds = [...cellBackgrounds];
    updatedCellBackgrounds[row][col] =
      updatedCellBackgrounds[row][col] === 'white' ? 'blue' : 'white';
    setCellBackgrounds(updatedCellBackgrounds);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleTitlePress}>
        <Text style={{ fontSize: 40, marginVertical: 20, fontWeight: 'bold' }}>
          Sopa de letras
        </Text>
      </TouchableOpacity>
      {showSoup && (
        <View style={{ flexDirection: 'row' }}>
          {randomLetters.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'column' }}>
              {row.map((letter, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={{
                    backgroundColor: cellBackgrounds[rowIndex][colIndex],
                    width: 38,
                    padding: 14,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => handlePress(rowIndex, colIndex)}>
                  {<Text style={{ fontSize: 15 }}>{letter}</Text>}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}