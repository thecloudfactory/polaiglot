import { AlphabetFilter, type AlphabetFilterValues } from "~/components/filters";
import { AlphabetCard } from "~/components/cards";
import { useState } from "react";
import { Flex, Text, Title, Stack, List } from "@mantine/core";

export function Alphabet() {
	const [filterValue, setValue] = useState<AlphabetFilterValues>("all");

	function handleFilterChange(value: string) {
		setValue(value as AlphabetFilterValues);
	}

	return (
		<Flex direction="column" align="flex-start" gap="md" mt="md">
			<Title order={2}>Alphabet</Title>
			<Text>
				The Kazakh alphabet is based on the Cyrillic script with additional characters. It consists of 42 letters, 33 of which are from the Russian alphabet and 9 of which are unique to Kazakh. The
				alphabet is phonetic, meaning that each letter corresponds to a single sound. The letters are divided into 12 vowels, 28 consonants and 2 voiceless letters used in russian loan words.
			</Text>

			<AlphabetFilter filterValue={filterValue} onChange={handleFilterChange} />
			<AlphabetCard filterValue={filterValue} />

			<Title order={3}>Vowels and consonants</Title>
			<Text>Kazakh pronunciation includes distinct vowels and consonants that differ from English sounds. Understanding these sounds is essential for accurate pronunciation and comprehension.</Text>

			<Title order={4}>Vowels</Title>
			<Text>
				Out of the 12 vowels, kazakh has 9 which are either short or long, and are generally classified into front or back vowels. Kazakh uses vowel harmony, where vowels in a word generally agree in
				being front or back. This harmony affects suffixes, which match the type of vowel in the root word.
			</Text>

			<Flex w="100%" gap="md" direction={{ base: "column", md: "row" }}>
				<Stack flex={1}>
					<Title order={4}>Front vowels:</Title>
					<List>
						<List.Item>
							<strong>Ә</strong> (similar to "a" in "cat")
						</List.Item>
						<List.Item>
							<strong>Ө</strong> (similar to "u" in "burn" but more rounded)
						</List.Item>
						<List.Item>
							<strong>Ү</strong> (like "u" in "burn," with lips rounded and more tension)
						</List.Item>
						<List.Item>
							<strong>І</strong> (similar to "ee" in "see")
						</List.Item>
						<List.Item>
							<strong>Е</strong> (like "e" in "bed")
						</List.Item>
					</List>
				</Stack>

				<Stack flex={1}>
					<Title order={4}>Back vowels:</Title>
					<List>
						<List.Item>
							<strong>А</strong> (like "a" in "father")
						</List.Item>
						<List.Item>
							<strong>О</strong> (similar to "aw" in "saw" but rounded)
						</List.Item>
						<List.Item>
							<strong>Ұ</strong> (like "u" in "Suit")
						</List.Item>
						<List.Item>
							<strong>Ы</strong> (unique sound between "uh" and "ee")
						</List.Item>
					</List>
				</Stack>

				<Stack flex={1}>
					<Title order={4}>Neutral vowels:</Title>
					<List>
						<List.Item>
							<strong>Э</strong> (like "e" in "met")
						</List.Item>
						<List.Item>
							<strong>И</strong> (similar to "ee" in "see")
						</List.Item>
						<List.Item>
							<strong>У</strong> (like "oo" in "boot," but can act as both a vowel and a consonant)
						</List.Item>
					</List>
				</Stack>
			</Flex>
		</Flex>
	);
}
