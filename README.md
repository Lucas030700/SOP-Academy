# S&OP Academy

Personal S&OP learning library and offline-first mobile learning app.

## Repository structure

- `curriculum/`: curriculum map and module/topic metadata.
- `lectures/`: complete Markdown lectures, organized by module and topic.
- `app/`: installable Progressive Web App (PWA).
- `data/`: JSON indexes and structured learning data.
- `docs/`: setup, publishing, backup, and synchronization documentation.

## Lecture publishing convention

Each topic has one canonical Markdown file:

`lectures/module-XX/topic-XX-YY-topic-slug.md`

A lecture should preserve the complete agreed lesson structure:
1. Topic Overview
2. Layman's Explanation
3. Technical Explanation
4. Detailed Discussion
5. Practical Examples and Applications
6. Formulas and Calculations (when applicable)
7. Business Perspective and Decision-Making
8. Key Takeaways
9. Knowledge Check and Exercises

Do not replace complete lectures with summaries. Preserve tables, formulas, assumptions, examples, and unanswered exercises.

## Publishing from a ChatGPT conversation

When a user asks to publish a lecture, identify its module and topic from the conversation, prepare the complete Markdown content, then create or update the canonical file. Update the curriculum index when a topic is added or revised. Never overwrite an existing lecture without fetching it first and confirming the intended update.

## Offline app

The PWA will keep a local copy of the curriculum and lectures on the device. GitHub is the master source; the local database is the offline reading copy. Normal reading must not require login or a network connection after content has been downloaded.

## Current status

Repository initialized. Application and lecture migration are not yet complete.
