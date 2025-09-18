# **User Preferences – MongoDB Schema**

## **Overview**

You're designing a backend schema to store customizable user preferences in a web application. In this assignment, your task is to define a Mongoose schema that includes nested objects, enums, default values, and validations.

> You'll write the schema in a `schema.js` file inside the boilerplate project.

## **Schema Requirements**

### **General Guidelines**

- Use appropriate Mongoose data types and validators
- Implement nested objects where logical (e.g., for grouped preferences)
- Apply constraints like `required`, `default`, `unique`, and `enum`
- Use meaningful default values and sensible field organization

### **Schema Fields**

#### **User Preferences Schema**

- `username`

  - Type: String
  - Required: true
  - Unique: true
  - Purpose: Unique identifier for the user

- `preferences`

  - Type: Object
  - Required: true
  - Purpose: Grouped settings related to user experience and notifications

- `preferences.theme`

  - Type: String
  - Enum: \['light', 'dark']
  - Default: `'light'`
  - Purpose: Preferred UI theme

- `preferences.language`

  - Type: String
  - Default: `'en'`
  - Purpose: Preferred display language

- `preferences.notifications`

  - Type: Object
  - Purpose: Settings related to how the user wants to receive notifications

- `preferences.notifications.email`

  - Type: Boolean
  - Default: `true`
  - Purpose: Whether the user wants email notifications

- `preferences.notifications.sms`

  - Type: Boolean
  - Default: `false`
  - Purpose: Whether the user wants SMS notifications

## **Deliverable**

- Write a MongoDB schema for the above user preferences system
- Ensure all required fields, nested objects, enums, and default values are implemented correctly
- Compile the schema into a model and export it from `schema.js`

# **How to Fork and Set Up Your Repository**

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:

  - **Option 1: Download and Push**

    1. Download the repository files from StackBlitz.

    2. Open your terminal/command prompt, navigate to the project folder, and run:

       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```

       Replace `<your_github_repo_url>` with your personal GitHub repository URL.

    3. Commit and push the files to your GitHub repository:

       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```

  - **Option 2: Push Directly**

    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

## **Submission Instructions**

- Submit your GitHub repo link
- Submit the Google Drive video link (ensure access permissions are open to `kalvium.community`)
- Include a short 1–2 line note summarizing your schema design
- **All of the above details must be added to a PDF file and uploaded on the submission portal.**

### **PDF Submission Format**

Title your submission file as:
`mongoose-practice#3-schema_<yourname>.pdf`

Your PDF should include:

- GitHub repository link
- Google Drive link to your video
- A short note on the schema you wrote (1–2 lines)

---

### **Example Submission Format**

- GitHub: `https://github.com/<your_username>/user-preferences-schema`
- Video: Google Drive link
- Note: “I created a user preferences schema with nested objects, enums, and default values using Mongoose.”
