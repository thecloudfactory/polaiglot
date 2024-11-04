import { Card, Text, Grid, Group } from "@mantine/core";
import type { AlphabetFilterValues } from "~/components/filters";
import { alphabet } from "~/constants/alphabet";

type AlphabetCardProps = {
	filterValue: AlphabetFilterValues;
};

export function AlphabetCard({ filterValue }: AlphabetCardProps) {
	const filteredAlphabet = alphabet.filter((char) => {
		if (filterValue === "vowel") return char.vowel;
		if (filterValue === "consonant") return !char.vowel;
		return true;
	});

	return (
		<Grid columns={24} w="100%">
			{filteredAlphabet.map((char) => (
				<Grid.Col key={char.letter} span={{ base: 12, sm: 6, md: 4 }}>
					<Card shadow="sm" padding="sm" radius="md" classNames={{ root: "custom" }} withBorder>
						<Text size="xl" fw={700} ta="center">
							{char.letter}
						</Text>

						<Text ta="center" c="dimmed">
							{char.sound}
						</Text>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	);
}
