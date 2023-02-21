import {Card, Container, Grid, Spacer, Text, Tooltip, User} from "@nextui-org/react";
import {InstagramLogoIcon, GitHubLogoIcon, StarIcon, TwitterLogoIcon, RocketIcon, EnvelopeClosedIcon, LinkedInLogoIcon, DiscordLogoIcon} from "@radix-ui/react-icons";
import * as randomcolor from "randomcolor";
import {useState, useEffect} from "react";
import KofiButton from "kofi-button";
import Head from "next/head";
import * as title from "title";
import ProfilePic from "../public/profile.png";
import GarbleText from "../components/garbleText";

export default function Home({githubData, githubRepoData, instagramData, pageInfo}) {
    const [nameRotation, setNameRotation] = useState(0);
    const [randomColors, setRandomColors] = useState([
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
        randomcolor(),
    ]);
    const [reset, setReset] = useState(false);
    useEffect(() => {
        setInterval(() => {
            //Get random int from 0 to 100

            setNameRotation(Math.floor(Math.random() * 100))
        }, 500);

    }, []);

    //<User src={'/profile.png'}  />

    return (
        <Container>
            <Head>
                <title>Quacksire</title>
                <link rel="icon" href={'/profile.png'} />
            </Head>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} md={6}>
                <Card variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)"}}>
                    <Card.Body >
                        <Grid.Container gap={1}>
                            <Grid>
                                <Text h1 > 👋 Hi, I&apos;m </Text>
                            </Grid>
                            <Grid>
                                <a href={'#'} onClick={() => {
                                    setRandomColors([
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                        randomcolor(),
                                    ])
                                    setReset(true);
                                    setTimeout(() => {
                                        setReset(false);
                                    }, 50);
                                }}>
                                <Text href={'#'}  h1 css={{
                                    textGradient: `${nameRotation}deg, ${randomColors[0]} -20%, ${randomColors[1]} -70%`,
                                }}>Quacksire</Text>
                                    </a>
                            </Grid>
                        </Grid.Container>
                        <Text h2 style={{paddingLeft: "5px"}}> I&apos;m a...</Text>
                        <Spacer y={0.25} />
                        <Text h2 style={{paddingLeft: "5px", fontWeight: "900"}} css={{
                            textGradient: `${nameRotation}deg, ${randomColors[2]} -20%, ${randomColors[3]} -70%`,
                        }}><GarbleText text={"Web Developer"} reset={reset} /> </Text>
                        <Text h2 style={{paddingLeft: "5px", fontWeight: "900"}} css={{
                            textGradient: `${nameRotation}deg, ${randomColors[4]} -20%, ${randomColors[5]} -70%`,
                        }}> <GarbleText text={"Transit Advocate"} reset={reset} /> </Text>
                        <Text h2 style={{paddingLeft: "5px", fontWeight: "900"}} css={{
                            textGradient: `${nameRotation}deg, ${randomColors[6]} -20%, ${randomColors[7]} -70%`,
                        }}> <GarbleText reset={reset} text={"& Amateur Photographer"} /> </Text>
                        <Spacer y={1} />
                        <Grid.Container gap={1}>

                            <Grid>
                                <Spacer y={0.25} />
                                <Card isPressable={true} variant={"flat"} isHoverable={true} style={{backgroundColor: "var(--nextui-colors-background)"}} onPress={() => window.open("https://twitter.com/duckdoquack", "_blank")}>
                                        <TwitterLogoIcon width={30} height={30} style={{paddingLeft: "5px"}}/>
                                </Card>
                            </Grid>
                            <Grid>
                                <Spacer y={0.25} />
                                <Card isPressable={true} variant={"flat"} isHoverable={true} style={{backgroundColor: "var(--nextui-colors-background)", width: "35px"}} onPress={() => window.open("https://discord.com/users/569910296303632414", "_blank")}>
                                    <DiscordLogoIcon width={30} height={30} style={{paddingLeft: "5px"}}/>
                                </Card>
                            </Grid>
                            <Grid>
                                <Spacer y={0.25} />
                                <Card isPressable={true} variant={"flat"} isHoverable={true} style={{backgroundColor: "var(--nextui-colors-background)", width: "35px"}} onPress={() => window.open("mailto:sam@quacksire.dev?subject=Hello!")}>
                                    <EnvelopeClosedIcon width={30} height={30} style={{paddingLeft: "5px"}}/>

                                </Card>
                            </Grid>
                            <Grid>
                                <Spacer y={0.25} />
                                <Card isPressable={true} variant={"flat"} isHoverable={true} style={{backgroundColor: "var(--nextui-colors-background)", width: "35px"}} onPress={() => window.open("https://www.linkedin.com/in/sam-jeffs/", "_blank")}>
                                    <LinkedInLogoIcon width={30} height={30} style={{paddingLeft: "5px"}}/>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card isPressable={true} isHoverable={true} variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)"}}>
                                    <KofiButton color="var(--nextui-colors-background)" title="Support" kofiID="quacksire" />
                                </Card>
                            </Grid>
                        </Grid.Container>

                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} md={6}>
                <Card variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)", paddingTop: "20px"}}>
                    <Card.Body>
                        <Text h2><RocketIcon width={30} height={30}/> Projects</Text>
                        {githubRepoData.map((repo, index) => (
                        <Card key={repo.id} variant={"flat"} isHoverable={true} isPressable={true} style={{ marginBottom: "10px", backgroundColor: "var(--nextui-colors-background)"}} onPress={() => window.open(repo.homepage, "_blank")}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="left">
                                    <Grid>
                                        <Text h3>{title(String(repo.name).replaceAll('-', " "))}</Text>
                                    </Grid>
                                    <Grid css={{color: "$neutral"}}>
                                        <Text h4 color={'neutral'}><StarIcon />
                                            {repo.stargazers_count} </Text>
                                    </Grid>
                                </Grid.Container>
                                <Text>{repo.description}</Text>
                            </Card.Body>
                        </Card>))}
                    </Card.Body>
                </Card>
            </Grid>
            <Grid style={{ width: "100%"}}>
                <Card variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)", width: "100%"}}>
                    <Card.Header>
                        <Text h2><InstagramLogoIcon  width={30} height={30}/> Instagram</Text>
                        <Spacer y={1}></Spacer>
                        <Text>@duckdoquack</Text>
                    </Card.Header>
                    <Card.Body>
                        <Grid.Container gap={2} justify="center">
                        {instagramData.map((post) => (
                        <Grid key={post.id} style={{ width: "25%"}} xs={12} sm={8} md={5} lg={3} xl={3}>
                            <Card isPressable={true} isHoverable={true} variant={"flat"} onPress={() => window.open(post.permalink, "_blank")}>

                                    <Card.Image
                                        src={
                                            post.childern ? post.childern[0].mediaUrl : post.mediaUrl
                                        }
                                        objectFit="cover"
                                        width={'100%'}
                                        height={'100%'}
                                        showSkeleton
                                        alt="Card image background"
                                    />
                                </Card>
                            </Grid>))}
                        </Grid.Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container >
            <Spacer y={1} />
            <Grid.Container justify="center">
                <Grid>
                    <Tooltip content={`Commit ${pageInfo.sha}`} placement="top">
                    <Text css={{color: "$neutral"}}> Made with 💖 on {String(new Date(pageInfo.buildTime).toLocaleString()).split(',')[0]} at {String(new Date(pageInfo.buildTime).toLocaleString()).split(',')[1]}</Text>
                    </Tooltip>
                    </Grid>
            </Grid.Container>
            <Spacer y={1} />
        </Container>
    );
}

export async function getStaticProps() {
    let githubRequest = await fetch('https://api.github.com/users/quacksire')
    let githubData = await githubRequest.json()

    let githubRepos = [
        "https://api.github.com/repos/ciderapp/Cider",
        "https://api.github.com/repos/quacksire/caltrans-cameras-next",
        "https://api.github.com/repos/quacksire/looped",
    ]
    let githubRepoData = []
    for (let i = 0; i < githubRepos.length; i++) {
        let repoRequest = await fetch(githubRepos[i])
        let repoData = await repoRequest.json()
        githubRepoData.push(repoData)
    }

    let instagramRequest = await fetch('https://feeds.behold.so/diZ7eNWPZSwEcYCyT2wZ');
    let instagramData = await instagramRequest.json();

    return {
        props: {
            githubData: githubData,
            githubRepoData: githubRepoData,
            instagramData: instagramData,
            pageInfo: {
                sha: process.env.CF_PAGES_COMMIT_SHA || "dev",
                buildTime: new Date().toLocaleString(),
            }
        }
    }


}
