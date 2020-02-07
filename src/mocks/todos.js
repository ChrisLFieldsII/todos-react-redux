import faker from 'faker';
import { Todo } from '../redux/models';

function getText() {
  return faker.lorem.words();
}

function getIsDone() {
  return Math.random() < 0.49;
}

const todos = [
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
  new Todo({ text: getText(), isDone: getIsDone() }),
];

export { todos };
