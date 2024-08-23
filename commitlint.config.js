module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "ops",
        "docs",
        "feat",
        "fix",
        "revert",
        "test",
        "chore!",
        "ops!",
        "docs!",
        "feat!",
        "fix!",
        "revert!",
        "test!"
      ]
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-max-length": [2, "always", 72],
    "header-max-length": [2, "always", 100]
  }
};
