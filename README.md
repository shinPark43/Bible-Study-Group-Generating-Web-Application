# Group Divider Application

## Overview
This repository contains a **Group Divider Application** that helps users divide individuals into groups, either with designated leaders or without. The application is user-friendly and requires the input of names in simple text fields.

![alt text](https://github.com/shinPark43/Bible-Study-Group-Generating-Web-Application/blob/main/images/example_image.PNG)

---
## Link
https://shinpark43.github.io/Bible-Study-Group-Generating-Web-Application/

## Features

1. **Group Creation with or without Leaders**:
   - Users can choose whether to assign leaders to the groups or create groups randomly without leaders.

2. **Input Names**:
   - **Members Only**: Enter the names of all individuals to be divided into groups, separated by commas.
   - **Leaders and Members**: If you choose to create groups with leaders:
     - A separate text box is available to input the names of leaders (comma-separated).
     - Another text box is provided for entering the names of the remaining members.

---

## How to Use

### **Option 1: Create Groups Without Leaders**
1. Select the "No Leaders" option.
2. In the provided text box, enter the names of all individuals to be divided, separated by commas.
   - Example: `Alice, Bob, Charlie, Dave`
3. Click the "Create Groups" button, and the system will divide the individuals into groups randomly.

### **Option 2: Create Groups With Leaders**
1. Select the "With Leaders" option.
2. Enter the names of leaders in the "Leaders" text box, separated by commas.
   - Example: `Alice, Bob`
3. Enter the names of the remaining members in the "Members" text box, separated by commas.
   - Example: `Charlie, Dave, Eve, Frank`
4. Click the "Create Groups" button. The system will assign leaders to each group and distribute members accordingly.

---

## Example Scenarios

### **Scenario 1: Groups Without Leaders**
- Input: `Alice, Bob, Charlie, Dave, Eve`
- Output: 
  - Group 1: Alice, Bob
  - Group 2: Charlie, Dave, Eve

### **Scenario 2: Groups With Leaders**
- Leaders Input: `Alice, Bob`
- Members Input: `Charlie, Dave, Eve, Frank`
- Output:
  - Group 1 (Leader: Alice): Charlie, Eve
  - Group 2 (Leader: Bob): Dave, Frank

---

## Requirements
- A modern web browser to run the application.
- A text editor for modifying inputs if needed.

---

## Contributions
Feel free to contribute by opening an issue or submitting a pull request! For any questions, reach out via the repository's Issues section.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

### Enjoy Using the Group Divider Application!
