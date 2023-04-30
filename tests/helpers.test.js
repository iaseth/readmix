const readmix = require("../dist");
const { helpers } = readmix;



test("isSingleFlag", () => {
	expect(helpers.isSingleFlag("-A")).toBe(true);
	expect(helpers.isSingleFlag("-F")).toBe(true);
	expect(helpers.isSingleFlag("-f")).toBe(true);

	expect(helpers.isSingleFlag("--foo")).toBe(false);
	expect(helpers.isSingleFlag("foo")).toBe(false);
	expect(helpers.isSingleFlag("-")).toBe(false);
});

test("isDoubleFlag", () => {
	expect(helpers.isDoubleFlag("--preview")).toBe(true);
	expect(helpers.isDoubleFlag("--Foo")).toBe(true);
	expect(helpers.isDoubleFlag("--x")).toBe(true);

	expect(helpers.isDoubleFlag("-foo")).toBe(false);
	expect(helpers.isDoubleFlag("foo")).toBe(false);
	expect(helpers.isDoubleFlag("--")).toBe(false);
});

test("isTripleFlag", () => {
	expect(helpers.isTripleFlag("---preview")).toBe(true);
	expect(helpers.isTripleFlag("---Foo")).toBe(true);
	expect(helpers.isTripleFlag("---x")).toBe(true);

	expect(helpers.isTripleFlag("-foo")).toBe(false);
	expect(helpers.isTripleFlag("--foo")).toBe(false);
	expect(helpers.isTripleFlag("-")).toBe(false);
	expect(helpers.isTripleFlag("--")).toBe(false);
	expect(helpers.isTripleFlag("---")).toBe(false);
});



test("isComment", () => {
	expect(helpers.isComment({text: "// Comment"})).toBe(true);
	expect(helpers.isComment({text: "  // Comment"})).toBe(true);
	expect(helpers.isComment({text: "\t// Comment"})).toBe(true);

	expect(helpers.isComment({text: ":: Comment"})).toBe(true);
	expect(helpers.isComment({text: "  :: Comment"})).toBe(true);
	expect(helpers.isComment({text: "\t:: Comment"})).toBe(true);

	expect(helpers.isComment({text: "  "})).toBe(false);
	expect(helpers.isComment({text: "\t"})).toBe(false);
	expect(helpers.isComment({text: "$"})).toBe(false);
	expect(helpers.isComment({text: "Foo"})).toBe(false);
});

test("isNotAComment", () => {
	expect(helpers.isNotAComment({text: "// Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "  // Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "\t// Comment"})).toBe(false);

	expect(helpers.isNotAComment({text: ":: Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "  :: Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "\t:: Comment"})).toBe(false);

	expect(helpers.isNotAComment({text: "  "})).toBe(true);
	expect(helpers.isNotAComment({text: "\t"})).toBe(true);
	expect(helpers.isNotAComment({text: "$"})).toBe(true);
	expect(helpers.isNotAComment({text: "Foo"})).toBe(true);
});

test("isSugar", () => {
	expect(helpers.isSugar({text: "// Comment"})).toBe(false);
	expect(helpers.isSugar({text: "  // Comment"})).toBe(false);
	expect(helpers.isSugar({text: "\t// Comment"})).toBe(false);

	expect(helpers.isSugar({text: ":: Comment"})).toBe(false);
	expect(helpers.isSugar({text: "  :: Comment"})).toBe(false);
	expect(helpers.isSugar({text: "\t:: Comment"})).toBe(false);

	expect(helpers.isSugar({text: " $ Foo"})).toBe(true);
	expect(helpers.isSugar({text: " => Foo"})).toBe(true);
	expect(helpers.isSugar({text: " -> Foo"})).toBe(true);
});


