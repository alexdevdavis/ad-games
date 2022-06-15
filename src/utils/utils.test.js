import dataFilter from "./data-filter";

describe("Data Filter", () => {
  const categoriesData = [
    {
      slug: "strategy",
      description:
        "Strategy-focused board games that prioritise limited-randomness",
    },
    {
      slug: "hidden-roles",
      description:
        "One or more players around the table have a secret, and the rest of you need to figure out who! Players attempt to uncover each other's hidden role",
    },
    {
      slug: "dexterity",
      description:
        "Games involving physical skill, something like Gladiators, for Board Games!",
    },
    {
      slug: "push-your-luck",
      description:
        "Games that allow you to take bigger risks to achieve increasingly valuable rewards - or to decide to keep what you’ve got before you lose everything.",
    },
    {
      slug: "roll-and-write",
      description:
        "Roll some dice and decide how to use the outcome, writing it into a personal scoring sheet. ",
    },
    {
      slug: "deck-building",
      description:
        "Games where players construct their own deck as a main element of the gameplay",
    },
    {
      slug: "engine-building",
      description:
        "Games where players construct unique points-gaining engines main element of the gameplay",
    },
  ];
  test("returns an array when passed an array", () => {
    expect(Array.isArray(dataFilter([]))).toBe(true);
  });
  test("returns an array of all data when passed no argument", () => {
    expect(dataFilter(categoriesData)).toEqual(categoriesData);
  });
  test("returns a new array when passed an array", () => {
    expect(dataFilter(categoriesData)).not.toBe(categoriesData);
  });
  test("returns an array filtered by passed object key filter term", () => {
    expect(dataFilter(categoriesData, "slug", null)).toEqual(categoriesData);
  });
  test("returns an array filtered by passed object value filter term", () => {
    expect(dataFilter(categoriesData, null, "dexterity")).toEqual([
      {
        slug: "dexterity",
        description:
          "Games involving physical skill, something like Gladiators, for Board Games!",
      },
    ]);
  });
});
