export const randomValueGenerator = ( { digit } ) => {
    const element = Math.round(Math.random() * digit);
    return element;
}