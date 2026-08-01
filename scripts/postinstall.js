import fs from "node:fs";
import path from "node:path";
import os from "node:os";

console.log("========================================");
console.log(" Interview Attack - Educational Demo");
console.log("========================================");
console.log("    ");
console.log("You have just executed a lifecycle script.");
console.log("    ");
console.log("What did this script do?");
console.log("✓ Printed this message");
console.log("✓ Read Node version");
console.log("✓ Read operating system");
console.log("✓ Created analysis-report.txt");
console.log("   ");
console.log("What could a malicious script do?");
console.log("• Download additional code");
console.log("• Collect environment information");
console.log("• Attempt to contact an external service(C&C).");
console.log("• Implement a back door.");
console.log("  ");

console.log("This project intentionally does none of those things.");





const report = `========================================
Interview Attack Analysis Report
========================================

Status: Educational Demonstration

Timestamp:
${new Date().toISOString()}

Node Version:
${process.version}

Platform:
${process.platform}

Architecture:
${process.arch}

Hostname:
${os.hostname()}

Working Directory:
${process.cwd()}

Observations
------------
✓ npm lifecycle hook executed
✓ analysis-report.txt generated

Educational Note
----------------
This project demonstrates that npm lifecycle
scripts execute automatically after installation.

Always review package.json and referenced
scripts before installing unfamiliar projects.
`;

const reportPath = path.join(process.cwd(), "analysis-report.txt");

fs.writeFileSync(reportPath, report, "utf8");

console.log(`✓ Created ${reportPath}`);