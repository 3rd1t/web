import React from "react";
import { render } from "@testing-library/react";
import Category from "./category";
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    pathname: "/data/secondpost",
  })),
}));


describe(" Category", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Category
        collection={{
          name: "data",
          documents: [
            {
              name: "data",
              href: "/data/index",
            },
          ],
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  describe("when url matches", () => {
    it("should render successfully", () => {
      const { baseElement } = render(
        <Category
          collection={{
            name: "data",
            documents: [
              {
                name: "data",
                href: "/data/index",
              },
              {
                name: "Secondpost",
                href: "/data/secondpost",
              },
            ],
          }}
        />
      );
      expect(baseElement).toBeTruthy();
    });
  });
});
