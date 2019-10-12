var faker = require('faker');
var cuid = require('cuid');

module.exports = () => {
  const data = { articles: [] };
  for (let i = 0; i < 5; i++) {
    data.articles.push({
      id: cuid(),
      title: faker.name.title(),
      description: faker.lorem.text(),
      image: faker.image.image(),
      votes: faker.random.number({
        min: 0,
        max: 20
      }),
      author: {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.image.avatar()
      }
    });
  }
  return data;
};
