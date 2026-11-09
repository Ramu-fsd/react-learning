import {render,screen} from "@testing-library/react";import {describe,it,expect} from "vitest";import {AccountCard} from "./AccountCard";
describe("AccountCard",()=>{it("renders a masked account and balance",()=>{render(<AccountCard number="1234567890" balance={125000}/>);expect(screen.getByText("•••• 7890")).toBeInTheDocument();expect(screen.getByText("₹1,25,000")).toBeInTheDocument();});});
