import inquirer from "inquirer";
let todoString = [];
let loop = true;
while (loop) {
    let todo = await inquirer.prompt([{
            type: 'input',
            name: 'todoItem',
            message: 'enter name what you want to add in ayour to-do list. '
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'do you want to add more item in yiour to-do list?',
            default: false
        }
    ]);
    const todoItem = todo.todoItem;
    const addMore = todo.addMore;
    if (todoItem) {
        todoString.push(todoItem);
    }
    loop = addMore;
}
;
if (todoString.length > 0) {
    console.log('here is your to-do list');
    for (let i = 0; i < todoString.length; i++) {
        console.log(`${i + 1}. ${todoString[i]}`);
    }
}
else {
    console.log('your to-do list is empty');
}
