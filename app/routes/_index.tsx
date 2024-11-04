import type { MetaFunction } from "@remix-run/node";
import { AppShell, Burger, Title, Text, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Alphabet } from "~/components/sections";

export const meta: MetaFunction = () => {
	return [{ title: "PolAIglot" }, { name: "description", content: "A comprehensive and accessible resource for beginners eager to learn the Kazakh language" }];
};

export default function Index() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 250,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
				<div>PolAIglot</div>
			</AppShell.Header>

			<AppShell.Navbar p="md">Navbar</AppShell.Navbar>

			<AppShell.Main>
				<Container fluid>
					<Title>Kazakh for beginners</Title>
					<Text mt="sm">
						The aim of this website is to provide a comprehensive and accessible resource for beginners eager to learn the Kazakh language. It will focus on building foundational skills in reading,
						speaking, and understanding Kazakh. Through the examples and exercises, users can develop language skills at their own pace. The site will a help learners connect with everyday usage and
						cultural contexts, making the learning experience both engaging and practical.
					</Text>
				</Container>
				<Container fluid mt="lg">
					<Alphabet />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}
