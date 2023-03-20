import { expect, test } from "vitest";
import { User, UserProps } from "../entities/user/user";

test("create a user", () => {
  const user = new User({
    name: "Kauan Costa",
    slug: "kauan",
    description: "I'm full-stack developer",
    github: "kauan777",
    linkedin: "kauan_costa",
    instagram: "ikauan.costa",
  });

  expect(user).toBeInstanceOf(User);
  expect(user.slug).toEqual("kauan");
});

test("cannot create user if already exists", () => {
  const users: UserProps[] = [];

  const user = new User({
    name: "Kauan Costa",
    slug: "kauan",
    description: "I'm full-stack developer",
    github: "kauan777",
    linkedin: "kauan_costa",
    instagram: "ikauan.costa",
  });

  users.push(user);

  const user2 = new User({
    name: "Kauan Costa2",
    slug: "kauan",
    description: "I'm full-stack developer",
    github: "kauan777",
    linkedin: "kauan_costa",
    instagram: "ikauan.costa",
  });

  const slugAlreadyExists = users.some((item) => item.slug === user2.slug);

  expect(slugAlreadyExists).toEqual(true);
  expect(() => {
    if (slugAlreadyExists) {
      throw Error("User already exists");
    }
  }).toThrow();
});
