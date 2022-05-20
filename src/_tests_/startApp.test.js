/** 
 * @jest-environment jsdom
*/

import { render, screen } from "@testing-library/react";
import React from "react";
import StartApp from '../components/startApp';

describe("Testing component StartApp", () => {
    it("Render component StartApp", () => {
        render(<StartApp />);
        const testElement = screen.getByTestId('h6');
        expect(testElement).toBeInTheDocument();
    });
});