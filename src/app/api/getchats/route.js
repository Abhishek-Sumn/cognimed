import { NextResponse } from "next/server";

const chats = [

    {
        id: "0",
        name: "Rahul Kumar",
        chats:
            [
                { send: "Rahul lorem send", recieve: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sit atque aliquid maxime impedit ex, iusto eaque eius, alias ea distinctio possimus totam molestiae aspernatur perferendis odio necessitatibus aliquam quis! Dignissimos." },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },

    {
        id: "1",
        name: "Aryan Kumar",
        chats:
            [
                { send: "Aryan lorem send", recieve: "lorem recieve" },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },

    {
        id: "2",
        name: "Shrawan Kumar",
        chats:
            [
                { send: "Shrawan lorem send", recieve: "lorem recieve" },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },

    {
        id: "3",
        name: "Manish Kumar",
        chats:
            [
                { send: "Manish lorem send", recieve: "lorem recieve" },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },


]

export function GET() {
    return NextResponse.json(chats)
}

