import { NextResponse } from "next/server";

const chats = [

    {
        id: "0",
        name: "Research topic 1",
        chats:
            [
                { send: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aut!", recieve: "www.example.com/a www.example.com/b www.example.com/c" },
                { send: "lorem2", recieve: "lorem" }

            ],
    },

    {
        id: "1",
        name: "Research topic 2",
        chats:
        [
            { send: "Lorem ipsum dolor Laboriosam, aut!", recieve: "www.example.com/a " },
            { send: "lorem2", recieve: "lorem" }

        ],
    },

    {
        id: "2",
        name: "Research topic 3",
        chats:
        [
            { send: "Lorem ipsum dolor Laboriosam, aut!", recieve: "www.example.com/a Lorem ipsum dolor sit amet."  },
            { send: "lorem2", recieve: "lorem" }

        ],
    },

    {
        id: "3",
        name: "Research topic 4",
        chats:
            [
                { send: " lorem send", recieve: "lorem recieve" },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },

    {
        id: "4",
        name: "Research topic 5",
        chats:
            [
                { send: " lorem send", recieve: "lorem recieve" },
                { send: "lorem2 send", recieve: "lorem 2 recieve" }

            ],
    },

    {
        id: "5",
        name: "Research topic 6",
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

