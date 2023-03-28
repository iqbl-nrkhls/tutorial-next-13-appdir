import Link from "next/link";

async function getData() {
    const index = Math.floor(Math.random() * 10)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${index}`);
    return res.json();
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <h1>I am a experimental feature from Next 13</h1>
            <Link href="/breaking">navigate to breaking</Link>

            <div>
                <p>title: { data.title }</p>
            </div>
        </div>
    );
}