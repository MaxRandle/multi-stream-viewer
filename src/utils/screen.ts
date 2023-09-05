/**
 * @summary Computes the number of rows and columns to display n items that minimizes screen space waste for video aspect-ratio items assuming a standard desktop screen shape.
 * @param numberOfItems The number of items to be displayed on the screen
 * @returns An object containing the number of columns and rows
 */
export const divideScreen = (numberOfItems: number) => {
  let numberOfColumns = 1;
  let numberOfRows = 1;

  if (numberOfItems >= 7) {
    numberOfColumns = 3;
    numberOfRows = 3;
  } else if (numberOfItems >= 5) {
    numberOfColumns = 2;
    numberOfRows = 3;
  } else if (numberOfItems >= 3) {
    numberOfColumns = 2;
    numberOfRows = 2;
  } else if (numberOfItems === 2) {
    numberOfColumns = 1;
    numberOfRows = 2;
  }

  return {
    numberOfColumns,
    numberOfRows,
  };
};
