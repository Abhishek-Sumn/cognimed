import { NextResponse } from "next/server";

const chats = [

    {
        name: "Rahul Kumar",
        chats:
            [
                { send: "Rahul lorem send", recieve: "lorem recieve" }, 
                { send: "lorem2 send", recieve: "lorem 2 recieve"}

            ],
    },

    {
        name: "Aryan Kumar",
        chats:
            [
                { send: "Aryan lorem send", recieve: "lorem recieve" }, 
                { send: "lorem2 send", recieve: "lorem 2 recieve"}

            ],
    },

    {
        name: "Shrawan Kumar",
        chats:
            [
                { send: "Shrawan lorem send", recieve: "lorem recieve" }, 
                { send: "lorem2 send", recieve: "lorem 2 recieve"}

            ],
    },

    {
        name: "Manish Kumar",
        chats:
            [
                { send: "Manish lorem send", recieve: "lorem recieve" }, 
                { send: "lorem2 send", recieve: "lorem 2 recieve"}

            ],
    },


]

export function GET() {
    return NextResponse.json(chats)
}

