# Axial Projects Lite

Projects are created by Axial members to indicate and qualify their interest in financing deals.

# Exercise

This exercise is a simple application to manage those projects. It should contain:

- View of all projects, with link to edit
- View with form to create or edit project
- Components/Directive(s) implementing behavior for financial inputs

## Project edit form

The create/edit project form should allow editing the project fields:

- Headline
- Target Check Size (mimimum and maximum)
- Target Revenue (mimimum and maximum)
- Target EBITDA (mimimum and maximum)

### Financial inputs

Each financial input (Check Size, Revenue and EBITDA) should:
- expand predefined shortcuts to larger numbers.
  (m -> millions, k-> thousands.
  if a value of '2k' is entered by the user, the value should be expanded to 2000.)
- format the number displayed in the input so it contains commas.
- ensure the value is a number.

### Financial range validation

In addition to the financial input formatting, the min/max ranges should:
- ensure the number entered for the minimum is not greater than the maximum
- ensure the number entered for the maximum is not less than the minimum
- if one number is entered for a range, ensure the other is required to submit

# Further

- We don't expect more than 3-4 hours of time spent on this challenge.
- We're not set on seeing all features completed. Finishing some well is preferred over all in a hurry.
- No persistence beyond browser memory is needed when creating / editing projects.
- The shell of the app is provided using AngularJS, Material, and ui-router. It's only here to help get started. Feel free to modify any part, or implement the with other tools based on AngularJS or Angular.
