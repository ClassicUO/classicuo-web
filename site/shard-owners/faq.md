---
outline: deep
---

# Shard Owners FAQ

## How can I add my shard to the server list?

Currently, we are not accepting new shards while we work on automating the application process. Please create
a [Shard Request issue](https://github.com/ClassicUO/classicuo-web/issues/new/choose) on our GitHub. We will notify you
once we are ready to add shards again.

## Will ClassicUO Web be open-source?

While the [desktop ClassicUO client](https://github.com/ClassicUO/ClassicUO) will always be open-source, we do not have plans to open-source the web client at
this time.

There are several reasons for this decision:

1. **Discovery:** We aim to be the "[OSRS](https://en.wikipedia.org/wiki/Old_School_RuneScape) of UO," providing a
   single destination for people to play UO and discover new shards and experiences.

   We believe many great shards go unnoticed because players have difficulty finding them, and servers struggle to
   attract users. A centralized server listing, which also serves as the "one-click" entry point for playing the
   servers, will enhance this experience and attract new players to the game.

2. **Focus:** Our goal is to concentrate our resources on improving the client.

   The web client is technically challenging and often fragile, working on it spans from solving deep low-level
   WebAssembly/C# runtime Javascript interop issues to managing complex web infrastructure like backend APIs, CDNs,
   geographically distributed servers, and cloud storage assets.

   We build this in our free time as a free service to the community and prefer to spend our time enhancing
   and maintaining the official web client rather than supporting and addressing issues from third-party web clients.

3. **Cheating:** As most shard owners would be aware, to effectively combat cheating, a closed-source client is
   necessary.

   Shards supporting the [WebIdentity packet](https://github.com/ClassicUO/packets/?tab=readme-ov-file#packets) can
   validate that players are running a genuine client and use shard rules to control exactly what features the web
   client is allowed to use.

We appreciate your understanding and support as we continue to develop and improve ClassicUO Web for the entire
community.

## I have custom MUL/UOP files for my shard. Can I use them with the web client?

Yes, you can use your modified files. Please refer to the [Patching guide](/shard-owners/patching) for more
information.

## I have a customized ClassicUO client for my shard. How can I modify the web client?

If your client simply disables certain features of ClassicUO, you may need only
the [Shard Rules](/shard-owners/shard-rules) features.

**If you have extensive C# changes to your client for custom features, they likely won't be compatible**.
In general, the CUO web client will remain close to stock CUO, apart from the web-only assistant features.

We are developing a Typescript API that shard owners can use to customize the client. Your code will run in a sandbox
with access to APIs for customization. We are exploring the APIs capabilities while keeping it secure from cheaters.

## Why is there a game proxy / is there a DDOS issue?

For web security reasons, direct TCP connections from a web browser to a random server are not possible. To connect to a
shard, we proxy the TCP connection over WebSockets.

We use Fly.io for hosting the game proxy, an edge-compute service. This means that when you connect, you go through the
game proxy in
the [nearest region](https://fly.io/docs/reference/regions/) before connecting to the server. The proxy controls
authentication for the web client.

If you ping the proxy, you will see Fly.io's anycast IP address, not a single server. DDOSing the anycast IP is like
trying to DDOS an entire server provider.

The proxy also hides the shard's IP address, using an internal Shard ID when
connecting the login/game sockets. If your shard uses only ClassicUO Web and does not share the IP publicly, it will be
protected from DDOS attempts.

## Why do web client users have the same IP?

As explained above, the game proxy connects users through the closest region to the shard. This means several users
connecting from the same region (e.g., New York) may share an IP address (the outgoing IP of the proxy).

If your shard has IP-based limits, this can be problematic if many users connect from one region.

To receive the real clients' IP addresses, the web client can send
the [WebIdentity packet](https://github.com/ClassicUO/packets/?tab=readme-ov-file#packets), which you can enable in the
Shard Management for your shard.
