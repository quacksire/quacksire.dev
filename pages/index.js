import {Card, Container, Grid, Spacer, Text, User} from "@nextui-org/react";
import {InstagramLogoIcon, GitHubLogoIcon, StarIcon, TwitterLogoIcon, ImageIcon} from "@radix-ui/react-icons";
import * as randomcolor from "randomcolor";
import {useState, useEffect} from "react";
import KofiButton from "kofi-button";
import Head from "next/head";
import ProfilePic from "../public/profile.png";


export default function Home({githubData, githubRepoData, instagramData}) {
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
                        }}> Web Developer </Text>
                        <Text h2 style={{paddingLeft: "5px", fontWeight: "900"}} css={{
                            textGradient: `${nameRotation}deg, ${randomColors[4]} -20%, ${randomColors[5]} -70%`,
                        }}> Transit Advocate </Text>
                        <Text h2 style={{paddingLeft: "5px", fontWeight: "900"}} css={{
                            textGradient: `${nameRotation}deg, ${randomColors[6]} -20%, ${randomColors[7]} -70%`,
                        }}> & Amateur Photographer </Text>
                        <Spacer y={1} />
                        <Grid.Container>
                            <Grid>
                                <Card isPressable={true} variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)"}}>
                                    <KofiButton color="var(--nextui-colors-background)" title="Support" kofiID="quacksire" />
                                </Card>
                            </Grid>
                            <Grid>
                                <Spacer y={0.25} />
                                <Card isPressable={true} variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)"}} onPress={() => window.open("https://twitter.com/duckdoquack", "_blank")}>
                                        <TwitterLogoIcon width={30} height={30}/>
                                </Card>
                            </Grid>
                        </Grid.Container>

                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} md={6}>
                <Card variant={"flat"} style={{backgroundColor: "var(--nextui-colors-background)", paddingTop: "20px"}}>
                    <Card.Header>
                        <Text h2><GitHubLogoIcon width={30} height={30}/> GitHub</Text>
                        <Spacer y={1}></Spacer>
                        <Text>@quacksire</Text>
                    </Card.Header>
                    <Card.Body>
                        {githubRepoData.map((repo) => (
                        <Card key={repo.id} variant={"flat"} isHoverable={true} isPressable={true} style={{ marginBottom: "10px", backgroundColor: "var(--nextui-colors-background)"}} onPress={() => window.open(repo.html_url, "_blank")}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="left">
                                    <Grid>
                                        <Text h3>{repo.name}</Text>
                                    </Grid>
                                    <Grid css={{color: "$neutral"}}>
                                        <Text h4 color={'neutral'}><StarIcon /> {repo.stargazers_count}</Text>
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
        </Grid.Container>
        </Container>
    );
}

export async function getStaticProps() {
    let githubRequest = await fetch('https://api.github.com/users/quacksire')
    let githubData = await githubRequest.json()

    let githubRepos = [
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
            instagramData: instagramData
        }
    }


}
