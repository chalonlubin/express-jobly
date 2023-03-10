"use strict";

const { sqlForPartialUpdate } = require("./sql.js");

describe("use sql partial update function", function () {
  test("gives correct output", function () {
    const dataToUpdate = {
      name: "testyMcTestfaceInc",
      description: "A test company",
      numEmployees: 5,
      logoUrl: "data:image/jpeg;base64,/9j/4PmhDP/9k=",
    };

    const jsToSql = {
      numEmployees: "num_employees",
      logoUrl: "logo_url",
    };

    const output = sqlForPartialUpdate(dataToUpdate, jsToSql);
    expect(output).toEqual({
      setCols: '"name"=$1, "description"=$2, "num_employees"=$3, "logo_url"=$4',
      values: [
        "testyMcTestfaceInc",
        "A test company",
        5,
        "data:image/jpeg;base64,/9j/4PmhDP/9k=",
      ],
    });
  });
});
