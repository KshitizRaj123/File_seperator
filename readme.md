# Node.js File Organizer Script

A lightweight, asynchronous Node.js utility that automatically scans its current directory and organizes messy files into distinct folders based on their extensions. 

## Features

- **Automated Directory Creation:** Uses `{ recursive: true }` to safely generate destination folders if they do not exist without crashing.
- **Image Sorting:** Groups `.png`, `.jpg`, and `.jpeg` files together.
- **Document Sorting:** Groups `.pdf` files cleanly into their own folder.
- **Safety Fail-safes:** 
  - Automatically ignores directories (preventing sub-folders from being nested inside each other).
  - Automatically skips `.js` script files so the program never accidentally moves itself while executing.
- **Catch-All Management:** Any miscellaneous extensions (like `.txt`, `.docx`, or `.zip`) are safely tucked into an `Other Files` directory.