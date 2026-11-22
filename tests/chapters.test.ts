import { test } from "node:test";
import assert from "node:assert/strict";
import { chapterAt, chapters, FILM_DURATION } from "../content/journey.ts";

test("chapter boundaries map to the right chapter", () => {
  assert.equal(chapterAt(0), 0);
  assert.equal(chapterAt(5.74), 0);
  assert.equal(chapterAt(5.75), 1);
  assert.equal(chapterAt(19), 4);
  assert.equal(chapterAt(39.25), 7);
  assert.equal(chapterAt(FILM_DURATION), 7);
});

test("bad times fall back to the first chapter", () => {
  assert.equal(chapterAt(NaN), 0);
  assert.equal(chapterAt(-3), 0);
});

test("chapters are ordered and inside the film", () => {
  chapters.forEach((c, i) => {
    assert.ok(c.start < FILM_DURATION);
    if (i) assert.ok(c.start > chapters[i - 1].start);
  });
});
