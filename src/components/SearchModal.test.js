import test from "ava";
import { FetchData } from "./SearchModal";

test("FetchData -> searching for diglett", (t) => {
  return FetchData((e) => e, "diglett").then((result) => {
    if (result && result.length === 1) {
      if (typeof result[0].name !== undefined)
        t.is(result[0].name.toLowerCase(), "diglett");
      else t.fail();
    } else {
      t.fail();
    }
  });
});

test("FetchData -> searching for water type pokemon", (t) => {
  return FetchData((e) => e, "water").then((result) => {
    if (result && result.length > 1) {
      if (typeof result[0].type !== undefined)
        t.is(result[0].type.toLowerCase(), "water");
      else t.fail();
    } else {
      t.fail();
    }
  });
});
