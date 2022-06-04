// 6 cards in my hand
const cullHand = (player, game) => {
  return {
    name: 'cull hand',
    actions: [() => moveCardToFloor(player, game)],
  };
};

// If the data structure is recursive, then where
// does the implementation live?

// Cull hand consists of culling X number of cards from your
// hand -> each "cull" consists of choosing any of the
// cards in your hand
const moveCardToFloor = (player, game) => {
  return {
    name: 'move card',
    actions: [
      (player, game) => {
        return {
          name: 'move a specific card',
          actions: [],
        };
      },
    ],
  };
};
