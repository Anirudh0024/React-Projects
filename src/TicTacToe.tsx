import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Snackbar} from 'react-native-snackbar';
import Icons from './comonents/Icons';

export default function TicTacToe() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(
    new Array(9).fill('empty', 0, 9),
  );

  // RESET GAME
  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  // CHECK WINNER
  const checkIsWinner = (gameState: string[]) => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2]
    ) {
      setGameWinner(`${gameState[0]} Won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} Won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} Won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} Won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} Won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} Won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} Won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} Won the game! 🥳`);
    } else if (!gameState.includes('empty')) {
      setGameWinner("It's a Draw! 🤝");
    }
  };

  // WHEN USER CLICKS A BOX
  const onChangeItem = (itemNumber: number) => {
    // Game already finished
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
      });
    }

    // Check if position is empty
    if (gameState[itemNumber] === 'empty') {
      // Create a copy of gameState
      const newGameState = [...gameState];

      // Put X or O
      newGameState[itemNumber] = isCross ? 'cross' : 'circle';

      // Update game state
      setGameState(newGameState);

      // Change player
      setIsCross(!isCross);

      // Check winner using UPDATED state
      checkIsWinner(newGameState);
    } else {
      // Position already occupied
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
      });
    }
  };

  return (
    <SafeAreaView style={styles.top}>
      <StatusBar />

      {/* PLAYER / WINNER INFO */}

      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
          ]}>
          <Text style={styles.gameTurnTxt}>
            Player's {isCross ? 'X' : 'O'} Turn
          </Text>
        </View>
      )}

      {/* GAME GRID */}

      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.card}
            onPress={() => onChangeItem(index)}>
            <Icons name={item} />
          </Pressable>
        )}
      />

      {/* RESTART BUTTON */}

      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>Restart Game</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    marginTop: 50,
  },

  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,

    elevation: 3,
  },

  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  playerX: {
    backgroundColor: '#38CC77',
  },

  playerO: {
    backgroundColor: '#F7CD2E',
  },

  grid: {
    margin: 12,
  },

  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },

  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },

  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },

  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    marginBottom: 20,

    backgroundColor: '#8D3DAF',
  },

  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});