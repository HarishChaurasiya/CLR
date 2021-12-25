var inquirer = require('inquirer');

function displayDetails(){

inquirer
  .prompt([
       {
           type : 'list',
           name : 'Selection',
           choices : ['About', 'Skills', 'Projects', 'Academics'],
       }
  ])
  .then((choices) => {
    if(choices.Selection == 'About'){
        console.log('I am a student of B.tech. computer science student')
    }
    else if(choices.Selection == 'Skills'){
        console.log('Cricket, Badminton, Mathematics')
    }
    else if(choices.Selection == 'Projects'){
        console.log('i am doing my first projects')
    }
    else if(choices.Selection == 'Academics'){
        console.log('`Have passed matriculation by CBSE by obtaining 10 CGPA marks
         and Intermediate by 78.6% marks`')
    }
  })

  });
}
function NextChoices(){

}