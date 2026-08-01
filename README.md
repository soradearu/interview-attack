# Interview Attack Educational Application

## Why this project exist?
Purpose of this project is to demonstrate how seemingly legitimate coding assessment repositories can execute npm lifecycle scripts during installation, and helps us understand why reviewing project files(example: package.json) before running npm install is important for security practice.


## Project Structure

Interview-attack/\
├── scripts/\
│   └── postinstall.js\
├── src/\
├── public/\
├── analysis-report.txt // Generates after the postinstall script runs.\
├── package.json\
└── README.md


## How does it work?
1. Clone the repository.
   >git clone < RepositoryName >
2. Run:
    >npm install
3. During installation the educational postinstall script runs automatically.\
  -Check your console logs.\
  -Check what was generated after running the "npm install" lifecycle command.
    >analysis-report.txt
5. You can also run the application. There is a simple interview form.
    >npm run dev


## Disclaimer

This repository is intended solely for educational purposes.


       