export function countNumber(ref: React.MutableRefObject<number>) {
    ref.current++;
    console.log(`${ref.current}`);
}


export function showMessage(input: string): string {
    const message = `Alert Message, ${input}!`;
    console.log(message);
    return message;
}

