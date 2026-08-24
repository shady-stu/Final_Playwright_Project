# Playwright E2E Testing Project

A cross-browser end-to-end testing project built with **Playwright** and **TypeScript**. It demonstrates a practical QA automation setup that runs the same test suite against Chromium, Firefox, and WebKit.

## Highlights

- Cross-browser coverage for Chrome, Firefox, and Safari engines
- Environment-based configuration with `.env`
- Automatic retry for unstable tests
- HTML test reports for debugging and review
- A clean structure ready for CI integration

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- dotenv

## Getting Started

```bash
git clone https://github.com/shady-stu/Final_Playwright_Project.git
cd Final_Playwright_Project
npm install
npx playwright install
```

Create a local `.env` file for any URLs or credentials required by the tests. Never commit real secrets.

## Run the Tests

```bash
# Run the complete suite
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run one browser project
npx playwright test --project=chromium

# Open the interactive UI
npx playwright test --ui

# View the latest HTML report
npx playwright show-report
```

## Browser Matrix

| Project | Playwright device |
| --- | --- |
| Chromium | Desktop Chrome |
| Firefox | Desktop Firefox |
| WebKit | Desktop Safari |

## Configuration

The project keeps tests under `tests/`, uses a 30-second test timeout, retries failed tests once, and writes an HTML report to `playwright-report/`.

## What This Project Demonstrates

This repository showcases browser automation, reusable test configuration, environment management, cross-browser verification, and failure reporting—core skills for reliable web application testing.

## Author

**Shady Sawalha** — Computer Science student focused on backend development, software engineering, and test automation.
