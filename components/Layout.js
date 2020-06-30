import Head from "next/head";
import React from "react";
import Navigation from "./Navigation";

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>ChatBot NextJS</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            </Head>
            <Navigation/>
            <main className="container">
                {children}
            </main>
        </div>
    )
}

export default Layout
