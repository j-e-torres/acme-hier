/*
    - Not happy with this solution
    - Doesn't scale with more different manager id levels;
*/

const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

function showManagementStructure(users) {
/*
moe
 - larry
	 - curly
 - shep
	 - groucho
*/
// debugger;
    let structureString = '';

    users.forEach(personObj => {
        if (personObj.managerId === undefined) {
            structureString += personObj.name;
        }

        else if (personObj.managerId === 1) {
            structureString += "\n - " + personObj.name;
        }

        else if (personObj.managerId === 2) {
            structureString += "\n    - " + personObj.name;
        }

        else {
            structureString += "\n    - " + personObj.name;
        }
    });

    console.log(structureString);
    return structureString;
}

showManagementStructure(users);
