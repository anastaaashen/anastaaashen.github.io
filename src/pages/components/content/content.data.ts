import { faker } from '@faker-js/faker';

type Post = {
    id: string;
    avatar: string;
    username: string;
    date: number;
    text: string;
    image: string;
};

export const posts: Post[] = Array(20)
.fill({
    id: '',
    avatar: '',
    username: '',
    date: '',
    text: '',
    image: '',
})
.map(() => ({
    id: faker.database.mongodbObjectId(),
    avatar: faker.image.avatar(),
    username: faker.internet.displayName(),
    date: faker.number.int({min:1, max:10}),
    text: faker.lorem.paragraph(),
    image: faker.image.urlLoremFlickr()
}));
