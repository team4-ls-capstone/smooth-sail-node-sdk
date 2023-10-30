import { Rule } from "./Rule";

export class Segment {
  constructor({ s_key, rules_operator, rules }) {
    this.s_key = s_key;
    this.rules_operator = rules_operator;
    this.rules = [];
    if (rules && rules.length !== 0) {
      rules.forEach((rule) => {
        this.rules.push(new Rule(rule));
      });
    }
  }

  evaluateSegment(userContext) {
    if (this.rules_operator === "all") {
      return this.rules.every((rule) => {
        return rule.isTrue(userContext);
      });
    } else if (this.rules_operator === "any") {
      return this.rules.some((rule) => {
        return rule.isTrue(userContext);
      });
    }

    return false;
  }
}
