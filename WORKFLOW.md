# AI-Assisted Workflow Comparison

## Overview

This exercise compared two different approaches to AI-assisted software development by building the same React settings form twice. The goal was to demonstrate how the quality of prompts affects the quality of AI-generated code. The first implementation used a very vague prompt with minimal instructions, while the second implementation used a detailed specification that included project requirements, validation rules, accessibility expectations, and a verification checklist. Both implementations were created in separate Git branches to allow a direct comparison.

## Round One – Vague Prompt

For the first implementation, I used the prompt: "Create a settings form." The generated output successfully created a basic React settings form with fields for user information and a Save button. However, it lacked validation, accessibility improvements, and error handling. Initially, Claude also generated multiple React components with a folder structure that did not match my existing Vite project, causing import errors. I simplified the implementation into a single `App.jsx` file so it could run correctly. While the feature worked, it required more manual review and troubleshooting before it was usable.

## Round Two – Detailed Prompt

For the second implementation, I provided detailed instructions describing the project environment, functional requirements, validation rules, accessibility expectations, UI behaviour, styling constraints, and verification steps. The generated code included required field validation, email format checking, age range validation, disabled submission until the form became valid, success feedback after submission, and clearer labels for accessibility. Because the requirements were more explicit, the generated output was closer to the desired result and required fewer corrections.

## Comparison

The detailed prompt produced code that was significantly more correct and complete. Validation reduced the possibility of invalid user input, while accessible labels and clear error messages improved usability. The second version also handled edge cases such as invalid email addresses, empty required fields, and age values outside the allowed range. Although writing the detailed prompt took more time initially, the overall review and debugging process was faster because the generated code already satisfied most of the requirements. In contrast, the vague prompt required more manual inspection and modifications before it could be used.

## AI Mistake I Caught

One mistake I identified was that the AI initially generated multiple React components with imports that did not match my project's folder structure. This resulted in import errors when running the application. I corrected the issue by restructuring the implementation into a single `App.jsx` component that integrated properly with my existing Vite project.

## Conclusion

This exercise demonstrated that effective AI-assisted development depends on clear specifications rather than simple requests. A vague prompt can produce functional code, but a detailed prompt produces more accurate, maintainable, and reliable results while reducing the overall review effort. I learned that writing precise requirements, verifying AI-generated code, and reviewing the output carefully are essential parts of an effective AI development workflow.
