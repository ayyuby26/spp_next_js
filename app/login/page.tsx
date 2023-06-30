"use client";

import { Card, Title, TextInput, Button } from "@tremor/react";
import { log } from "console";
import { redirect } from "next/navigation";

async function getData() {
    alert("halo")
}


export default async function Page() {
    // const data = await getData()

    return (
        <main className="flex justify-center items-center h-screen">
            <div>
                <Card>
                    <Title className="text-center">Halaman Login</Title>
                    {/* <form action="/api/login" method="post"> */}
                    <div className="h-5" />
                    <TextInput type="text" id="username" name="username" placeholder="Username..." />
                    <div className="h-5" />
                    <TextInput type="password" id="password" name="password" placeholder="Password..." />
                    <div className="h-5" />

                    <Button type="submit" onSubmit={getData} className="w-full">LOGIN</Button>

                    {/* </form> */}
                </Card>
            </div>
        </main>
    );
}
