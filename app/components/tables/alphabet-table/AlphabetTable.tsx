import { Table } from "@mantine/core";
import { alphabet } from "~/constants/alphabet";

export function AlphabetTable() {
	const rows = alphabet.map((char) => (
		<Table.Tr key={char.letter}>
			<Table.Td>{char.letter}</Table.Td>
			<Table.Td>{char.sound}</Table.Td>
			<Table.Td>{char.example}</Table.Td>
			<Table.Td>{char.vowel.toString()}</Table.Td>
		</Table.Tr>
	));

	return (
		<Table>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Cyrillic letter</Table.Th>
					<Table.Th>Sound</Table.Th>
					<Table.Th>Approximation</Table.Th>
					<Table.Th>Vowel</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{rows}</Table.Tbody>
		</Table>
	);
}
