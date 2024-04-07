### README for Douglas.de Challenge

### Repository Setup Instructions

This section details the necessary steps to set up the repository for our automated testing environment, specifically focused on initializing the project with npm.

#### Initial Setup

To ensure all dependencies are correctly installed and the project is set up to run smoothly, follow these steps:

1. **Clone the Repository**: First, clone the repository to your local machine using your preferred method (SSH or HTTPS). Navigate to the directory where you want the repository to be cloned and use the `git clone` command followed by the repository URL.

2. **Install Dependencies**: Once the repository has been cloned, navigate into the project's root directory. Here, you'll need to run the `npm i` command. This command initiates npm (Node Package Manager) to automatically install all the necessary dependencies listed in the project's `package.json` file. These dependencies include everything from WebDriverIO for running your tests to any assertion libraries and utilities you might need.

   ```bash
   cd path/to/repository
   npm i
   ```

3. **Verify Installation**: After the installation process completes, you should see a `node_modules` folder in your project directory. This folder contains all the packages that npm has installed based on the project's `package.json`. It's recommended to run a quick test or a predefined script from your `package.json` to ensure everything is set up correctly.


#### Overview
This challenge is designed to test the functionality of https://www.douglas.de/ through automated testing, specifically focusing on features related to "parfum." It involves a feature file named `parfum.feature`, containing various scenarios that are intended to be executed using WebDriverIO.

#### Feature: Parfum
The `Parfum` feature begins with a common setup where the user starts on the homepage, rejects all cookies, and navigates to the parfum section. This setup ensures that all subsequent scenarios start from a consistent state. The feature file then details three distinct scenarios, each targeting different criteria: Sale, New (Neu), and Limited (Limitiert).

##### Scenario Summaries

- **Sale Criteria**: This scenario filters parfum products by sale items, specific product type "Eau de Parfum," brand "Viktor&Rolf," and gender preference "Männlich." It verifies a list of products based on these criteria.

- **New Criteria (Neu)**: Focuses on new arrivals, filtering by the "NEU" highlight, product type "Bodyspray," and gender preference "Männlich." It validates a specific list of new products.

- **Limited Criteria (Limitiert)**: Targets limited edition products, filtering by product type "Eau de Parfum," brand "Armani," highlight "Limitiert," and occasion "Muttertag," with a gender preference for "Weiblich." It checks for the presence of products meeting these specifications.

#### Running Scenarios

To run a specific scenario with WebDriverIO, you can use the tag associated with each scenario. For example:

- To execute the **Sale Criteria** scenario: `npm run wdio -- --cucumberOpts.tagExpression="@Sale"`
- To run the **New Criteria** scenario: `npm run wdio -- --cucumberOpts.tagExpression="@New"`
- For the **Limited Criteria** scenario: `npm run wdio -- --cucumberOpts.tagExpression="@Limited"`

#### Running the Entire Feature Suite

To run all the scenarios within the `parfum.feature` file, you can simply specify the feature file without a tag filter:

`npm run wdio`

This command will execute all the scenarios in sequence, testing the entire "Parfum" feature as defined.


### Performance Issues Notice

In my assessment, the website exhibits significant performance issues. To mitigate the impact of these problems on our automated tests, I have implemented a strategy of using four retries within our Cucumber framework. Despite incorporating `waitForDisplay` and `waitForExist` methods in an attempt to ensure elements are interactable before proceeding, the website occasionally crashes when trying to interact with certain elements. These crashes appear to occur at random, making it difficult to predict when they might happen. The addition of retries aims to provide a more robust solution, allowing the tests to attempt to recover and proceed should they encounter an unexpected failure due to these performance issues.

