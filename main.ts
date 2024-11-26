import { AtpAgent } from "@atproto/api";

async function main() {
    const username = await prompt("username") || "";
    const password = await prompt("password") || "";
    const agent = new AtpAgent({
        service: "https://bsky.social",
    });
    await agent.login({
        identifier: username,
        password: password,
    });
    const date = new Date();
    date.setMinutes(date.getMinutes() + 5);


    console.log(date);
    const res = await agent.post({
      text: 'test',
      createdAt: date.toISOString()
    })
    console.log(res);
}

main();