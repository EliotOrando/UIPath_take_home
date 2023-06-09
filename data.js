let accountIds = {
	"Customer Inc": "1234-abcd",
	"Test Co.": "3456-cdef",
	"Pow Kapow": "6789-defa",
	"Bang Boom": "2345-bcde",
	"Go Go Gadget Inc.": "4321-1cde"
}

let accountGroups =
{
	"Customer Inc": [
		"cust_a",
		"cust_b",
		"c_cust"
	],
	"Test Co.": [
		"testx",
		"ztest"
	],
	"Pow Kapow": [
		"pk1",
		"pk2",
		"powa"
	],
	"Bang Boom": [
		"bb",
	],
	"Go Go Gadget Inc.": [
		"ggg-a",
		"go-go",
		"g-gad"
	],
}

let groups =
[
	{ name: "cust_a", "networks": ["1.1.1.1"] },
	{ name: "testx", "networks": ["5.5.5.5"]},
	{ name: "c_cust", "networks": ["2.2.2.2", "1.1.1.1"]},
	{ name: "ztest", "networks": ["5.5.5.6"]},
	{ name: "pk1", "networks": ["6.6.6.6", "6.6.6.66"]},
	{ name: "pk2", "networks": ["6.6.6.6", "6.6.6.7"]},
	{ name: "bb", "networks": ["9.9.9.9"]},
	{ name: "ggg-a", "networks": ["7.7.7.7"]},
	{ name: "go-go", "networks": ["7.7.7.7", "77.77.77.77"]},
	{ name: "g-gad", "networks": ["70.70.0.7"]},
	{ name: "powa", "networks": ["60.60.60.60"]}
]

export { accountIds, accountGroups, groups }