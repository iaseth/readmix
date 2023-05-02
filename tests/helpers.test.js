const readmix = require("../dist");
const { helpers } = readmix;



test("isSingleFlag", () => {
	const { isSingleFlag } = helpers;
	expect(isSingleFlag("-A")).toBe(true);
	expect(isSingleFlag("-F")).toBe(true);
	expect(isSingleFlag("-f")).toBe(true);

	expect(isSingleFlag("--foo")).toBe(false);
	expect(isSingleFlag("foo")).toBe(false);
	expect(isSingleFlag("-")).toBe(false);
});

test("isDoubleFlag", () => {
	const { isDoubleFlag } = helpers;
	expect(isDoubleFlag("--preview")).toBe(true);
	expect(isDoubleFlag("--Foo")).toBe(true);
	expect(isDoubleFlag("--x")).toBe(true);

	expect(isDoubleFlag("-foo")).toBe(false);
	expect(isDoubleFlag("foo")).toBe(false);
	expect(isDoubleFlag("--")).toBe(false);
});

test("isTripleFlag", () => {
	const { isTripleFlag } = helpers;
	expect(isTripleFlag("---preview")).toBe(true);
	expect(isTripleFlag("---Foo")).toBe(true);
	expect(isTripleFlag("---x")).toBe(true);

	expect(isTripleFlag("-foo")).toBe(false);
	expect(isTripleFlag("--foo")).toBe(false);
	expect(isTripleFlag("-")).toBe(false);
	expect(isTripleFlag("--")).toBe(false);
	expect(isTripleFlag("---")).toBe(false);
});



test("isComment", () => {
	const { isComment } = helpers;
	expect(isComment({text: "// Comment"})).toBe(true);
	expect(isComment({text: "  // Comment"})).toBe(true);
	expect(isComment({text: "\t// Comment"})).toBe(true);

	expect(isComment({text: ":: Comment"})).toBe(true);
	expect(isComment({text: "  :: Comment"})).toBe(true);
	expect(isComment({text: "\t:: Comment"})).toBe(true);

	expect(isComment({text: "  "})).toBe(false);
	expect(isComment({text: "\t"})).toBe(false);
	expect(isComment({text: "$"})).toBe(false);
	expect(isComment({text: "Foo"})).toBe(false);
});

test("isNotAComment", () => {
	const { isNotAComment } = helpers;
	expect(isNotAComment({text: "// Comment"})).toBe(false);
	expect(isNotAComment({text: "  // Comment"})).toBe(false);
	expect(isNotAComment({text: "\t// Comment"})).toBe(false);

	expect(isNotAComment({text: ":: Comment"})).toBe(false);
	expect(isNotAComment({text: "  :: Comment"})).toBe(false);
	expect(isNotAComment({text: "\t:: Comment"})).toBe(false);

	expect(isNotAComment({text: "  "})).toBe(true);
	expect(isNotAComment({text: "\t"})).toBe(true);
	expect(isNotAComment({text: "$"})).toBe(true);
	expect(isNotAComment({text: "Foo"})).toBe(true);
});

test("isSugar", () => {
	const { isSugar } = helpers;
	expect(isSugar({text: "// Comment"})).toBe(false);
	expect(isSugar({text: "  // Comment"})).toBe(false);
	expect(isSugar({text: "\t// Comment"})).toBe(false);

	expect(isSugar({text: ":: Comment"})).toBe(false);
	expect(isSugar({text: "  :: Comment"})).toBe(false);
	expect(isSugar({text: "\t:: Comment"})).toBe(false);

	expect(isSugar({text: " $ Foo"})).toBe(true);
	expect(isSugar({text: " => Foo"})).toBe(true);
	expect(isSugar({text: " -> Foo"})).toBe(true);
});

test("isHeading", () => {
	const { isHeading } = helpers;
	expect(isHeading({text: "// Foo"})).toBe(false);
	expect(isHeading({text: "  // Foo"})).toBe(false);
	expect(isHeading({text: "\t// Foo"})).toBe(false);

	expect(isHeading({text: ":: Foo"})).toBe(false);
	expect(isHeading({text: "  :: Foo"})).toBe(false);
	expect(isHeading({text: "\t:: Foo"})).toBe(false);

	expect(isHeading({text: "# Foo"})).toBe(true);
	expect(isHeading({text: "## Foo"})).toBe(true);
	expect(isHeading({text: "###### Foo"})).toBe(true);
});


