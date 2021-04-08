import Message from './message.entity';
export default class Sale {
    sale_id: number;
    sale_name: string;
    messageConnection: Promise<Message[]>;
}
