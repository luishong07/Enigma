

// const generateEnigma = {

	// letters[reverseOfRotor1[reverseOfRotor2[reverseOfRotor3[rotor3[rotor2[rotor1[letters.indexOf(e.key)]]]]]]]

	let rotorIV= [
        4,
	    18,
	    14,

		21,
		15,
		25,
		
		9,
		0,
		24,

		16,
		20,
		8,

		17,
		7,
		23,

		11,
		13,
		5,

		19,
		6,
		10,

		3,
		2,
		12,
		
		22,
		1
	]

	let rotorII = [
         0,//0
	     9,//1
	     3,//2
		 10,//3

		 18,//4
		 8,//5
		17,//6
		20,//7

		23,//8
		1,//9
		11,//10
		7,//11
		
		22,//12
		19,//13
		12,//14
		2,//15

		16,//16
		6,	//17
		25,//18
		13,//19

		15,//20
		24,//21
		5,//22
		21,//23
	
		14,
		4
	]

	let rotorIII = [
			1,
			3,
			5,
			7,

			9,
			11,
			2,//6
			15,//7

			17,//8
			19,
			23,
			21,

			25,
			13,
			24,//14
			4,//15

			8,
			22,
			6,
			0,//19

			10,
			12,
			20,//22
			18,

			16,
			14
	]
	
	let reflector = [
			24,
			17,
			20,//2
			7,//3

			16,
			18,
			11,
            3,//7

            15,
            23,
            13,
            6,//11

            14,
            10,
            12,//14
            8,//15

            4,
            1,
            5,
            25,

            2,//20
            22,
            21,
            9,

            0,
            19
			
]

let reverseIII = [
			19,
            0,
			6,//2
            1,

            15,
            2,
            18,
            3,//7

            16,//8
            4,
            20,
            5,//11

			21,
            13,
            25,
            7,//15

            24,
            8,
            23,
            9,

            22,//20
            11,
            17,
            10,

            14,
            12

]

let reverseII = [
			0,
			9,
			15,
			2,//3

			25,
			22,
			17,//6
			11,

			5,
			1,
			3,
			10,

		    14,
			19,
			24,
			20,//15

			16,
			6,//17
			4,
			13,

			7,
			23,//21
			12,//22
            8,//23

            21,
            18
] 

let reverseIV = [
			7,
			25,
			22,
			21,

			0,
			17,
			19,//6
			13,

			11,
			6,
			20,
			15,//11

			23,//12
			16,
			2,
			4,

			9,//16
			12,
			1,
			18,//19

            10,
            3,
            24,
            14,

            8,
            5
]

	
// }

export {rotorII}
export {rotorIII}
export {rotorIV}

export {reflector}

export {reverseIV}
export {reverseIII}
export {reverseII}
// let reverseRotor1 = rotor1.map( number => rotor1.indexOf(number) )