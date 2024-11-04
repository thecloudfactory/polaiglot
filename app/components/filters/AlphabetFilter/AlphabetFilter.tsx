import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

export type AlphabetFilterValues = "all" | "vowel" | "consonant";

type AlphabetFilterProps = {
	filterValue: AlphabetFilterValues;
	onChange: (value: string) => void;
};

const filterOptions = [
	{ label: "All", value: "all" },
	{ label: "Vowel", value: "vowel" },
	{ label: "Consonant", value: "consonant" },
];

export function AlphabetFilter({ filterValue, onChange }: AlphabetFilterProps) {
	return <SegmentedControl value={filterValue} onChange={onChange} data={filterOptions} />;
}
