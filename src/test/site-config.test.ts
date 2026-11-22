import { describe, expect, it } from "vitest";
import { APP_URL } from "@/lib/site-config";

describe("Tennlio application destination", () => {
  it("opens the user-provided Tennlio domain over HTTPS", () => {
    expect(APP_URL).toBe("https://tennlio.com");
  });
});