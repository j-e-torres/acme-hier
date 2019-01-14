/*
    - Not happy with this solution, feel like I can use more advanced approach
    - Doesn't scale with more different manager id levels;
    - Also tried using
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
        switch (personObj.managerId) {
            case 1:
                structureString += "\n - " + personObj.name;
                break;
            case 2:
                structureString += "\n    - " + personObj.name;
                break;
            case 4:
                structureString += "\n    - " + personObj.name;
                break;
            default:
                structureString += personObj.name
        }
    });

    console.log(structureString);
    return structureString;
}

showManagementStructure(users);
