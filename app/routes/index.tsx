import type { MetaFunction } from "@remix-run/node";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [{ title: "PolAIglot" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
	return <div>hello</div>;
}
