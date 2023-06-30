"use client";

import {
    Button,
    Card,
    TextInput,
    Title
} from "@tremor/react";


export default function Page() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div>
                <Card>
                    <Title className="text-center">Halaman DASHBOARD</Title>
                    <div className="h-5" />
                    <TextInput placeholder="Username..." />
                    <div className="h-5" />
                    <TextInput placeholder="Password..." />
                    <div className="h-5" />
                    <Button className="w-full">LOGIN</Button>
                </Card>
            </div>
        </main>
    );
}