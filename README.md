# Practice Software Testing — Playwright E2E Project

A TypeScript and Playwright automation project for [Practice Software Testing](https://practicesoftwaretesting.com). It organizes product-search and filter scenarios with page objects and runs the same discovered cases across Chromium, Firefox, and WebKit.

## What It Covers

The implemented specifications exercise:

- Product search
- Category filtering
- Brand filtering
- Price sorting
- Price-range equivalence partitions and boundary values

Playwright currently discovers **11 logical tests across three browser projects**, producing **33 project/test combinations** from five implemented spec files. This is a discovery count, not a claim that the current suite is fully passing.

## Tech Stack

| Area | Technology |
| --- | --- |
| Test runner | Playwright Test |
| Language | TypeScript |
| Browser projects | Chromium, Firefox, WebKit |
| Configuration | dotenv |
| Automation | GitHub Actions |
| Reporting | Playwright HTML report |

## Project Structure

```text
tests/
  filters/                 Five implemented search, filter, and sort specifications
  auth/                    Authentication placeholders
  cart/                    Cart placeholders
pages/                     Page-object classes and shared BasePage
fixtures/                  Shared fixture location
types/                     Test-specific TypeScript types
playwright.config.ts       Browsers, timeout, retry, and HTML reporter
.env.example               Optional filter/search input values
.github/workflows/         Cross-browser GitHub Actions workflow
```

`BasePage` targets `https://practicesoftwaretesting.com`. The configuration uses a 30-second test timeout, one retry, and writes the HTML report to `playwright-report/`.

## Getting Started

### Prerequisites

- Node.js and npm
- Internet access to the public target application

### Install

```bash
git clone https://github.com/shady-stu/Final_Playwright_Project.git
cd Final_Playwright_Project
npm ci
npx playwright install
```

Use `npx playwright install --with-deps` in a Linux CI environment when the browser system packages are not already available.

### Optional Test Data

The suite has defaults for its implemented scenarios, so `.env` is optional. Copy `.env.example` when you want to override them:

```dotenv
SEARCH_KEYWORD=hammer
FILTER_CATEGORY=Hand Tools
FILTER_BRAND=ForgeFlex Tools
SORT_OPTION=price-asc
MIN_PRICE=
MAX_PRICE=
```

The current tests read `SEARCH_KEYWORD`, `FILTER_CATEGORY`, `FILTER_BRAND`, and `SORT_OPTION`. `MIN_PRICE` and `MAX_PRICE` are reserved placeholders and are not currently read by the specs. No login credentials are required by the implemented filter suite.

## Running the Suite

```bash
# Discover tests without running browsers
npx playwright test --list

# Run all configured browser projects
npx playwright test

# Run one browser project
npx playwright test --project=chromium

# Run with a visible browser
npx playwright test --headed

# Open Playwright's interactive runner
npx playwright test --ui

# View the most recent HTML report
npx playwright show-report
```

The repository does not define npm test scripts; the supported commands call `npx playwright` directly.

## Test Design

```text
Specification
    ↓
Feature page object
    ↓
Shared BasePage navigation and helpers
    ↓
Practice Software Testing UI
```

Price-range coverage uses valid boundary/inside cases and invalid equivalence partitions. Search, category, brand, and sorting scenarios reuse dedicated page objects. The same specifications are expanded across the three configured desktop browser engines.

## Continuous Integration

`.github/workflows/playwright.yml` runs on pushes and pull requests to `main` or `master`. It installs dependencies and browser packages, executes the suite, and uploads `playwright-report/` for 30 days even when tests fail.

[View workflow runs](https://github.com/shady-stu/Final_Playwright_Project/actions)

The latest workflow observed during this documentation update failed during test execution, so this README intentionally does not display a passing-status badge.

## Current Limitations and Next Steps

- The authentication and cart spec/page-object files are placeholders and do not contain tests yet.
- Several filter scenarios currently perform UI actions without asserting the resulting product list.
- One invalid price-range case expects text that differs from the page object's thrown message and needs to be aligned.
- The public target site and its data can change independently of this repository.
- Add stable result assertions, implement the placeholder auth/cart flows, and isolate test data where possible.
- Replace brittle waits and repeated selector loops with stronger Playwright locators and web-first assertions.

## Author

**Shady Sawalha** — Computer Science student interested in backend development, software engineering, and test automation.

