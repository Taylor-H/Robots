const { green, red, blue } = require('chalk');
const { db, Robot, Project, workerTasks } = require('./server/db');
const robots = [
  {
    name: 'Beep',
    fuelType: 'gas',
    fuelLevel: 55,
    imageUrl: '/assets/robot.png'
  },
  { name: 'Eva', fuelLevel: 55, imageUrl: '/assets/robot1.png'},
  { name: 'Boop2021', imageUrl: '/assets/robot7.png'},
  { name: 'Bender', imageUrl: '/assets/robot4.png' },
  { name: 'SiriusV2', imageUrl: '/assets/robot3.png' },
  { name: 'Shredder', imageUrl: '/assets/robot2.png' },
  { name: 'Vacuum', imageUrl: '/assets/robot5.png' },
  { name: 'Joe', imageUrl: '/assets/robot6.png' },
  { name: 'HAL.V.2021', imageUrl: '/assets/robot8.png' },
];
const tasks = [
  {robotId: [3], projectId: [2]}, {robotId: [1], projectId: [3]}
]
const projects = [
  {
    title: 'Breakfast',
    deadline: new Date().toString(),
    completed: false,
    priority: 5,
  },
  {
    title: 'lunch',
    deadline: new Date().toString(),
    completed: false,
    priority: 5,
  },
  {
    title: 'Do cartwheel',
    priority: 1,
    deadline: new Date().toString(),
    description:
      'Lorem ipsum dolor sit amet. Eos earum tempore qui unde iusto ut blanditiis nobis id maiores doloribus 33 saepe voluptates eos explicabo enim maxime dolorum. Eos quisquam inventore et natus ratione non harum Quis a temporibus repudiandae cum veritatis vero sed facere sunt vel eveniet cupiditate. Qui rerum architecto ut pariatur unde est delectus quia rem quas veniam non rerum dolores sit rerum tempora cum dolore quod?',
  },
];
const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      robots.map((robot) => {

        return Robot.create(robot);
      })
    );

    // 'Beep'.addProject('lunch', { through: { completed: 'false' }})
    console.log(blue('Seeding success!'), robots);
    await Promise.all(
      projects.map((project) => {
        return Project.create(project);
      })
    );
    await Promise.all(
      tasks.map((task) => {
return workerTasks.create(task);
 })
 );
    console.log(green('Seeding success!'));
    db.close();
  } catch (err) {
    console.log(red(err));
  }
};


// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

// const projects = [
//   { title: 'Build homes for everyone', description: 'Lorem Ipsum' },
//   { title: 'Reverse global warming', completed: true, },
//   { title: 'Solve world hunger', priority: 10 },
// ];
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
module.exports = seed
