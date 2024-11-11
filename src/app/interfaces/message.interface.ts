export interface Message {
    text: string,
    reversed: boolean;
    sender: string;
    message: string;
    date: string;
    id: number;  
}
export type Messages = Message[];