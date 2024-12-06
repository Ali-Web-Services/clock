export interface IMessagesBody {
    messages: IMessage[]
}

export interface IMessage {
    name: string
    sequence: string[]
}