# Publishing Workflow

## Per-conversation workflow

When the user says "Push this lecture to GitHub":

1. Identify module number, topic number, and exact title from the source conversation.
2. Prepare the complete lecture in Markdown using the established S&OP lesson structure.
3. Preserve all examples, formulas, tables, assumptions, and knowledge-check questions.
4. Use the canonical path:
   `lectures/module-XX/topic-XX-YY-topic-slug.md`
5. Check whether the destination file already exists.
6. Create a new file if it does not exist; otherwise fetch and reconcile the existing content before updating it.
7. Update `curriculum/curriculum.json` with the topic metadata and path.
8. Report the exact file path and commit result to the user.

## Safety and content integrity

- Never claim that all project conversations have been migrated unless they have actually been collected and verified.
- Do not invent missing module titles, topic titles, or lecture sections.
- If the current conversation contains only a request or outline rather than the actual lecture, do not publish it as a complete lecture.
- Never publish credentials, tokens, personal secrets, or unrelated private content.
- For updates, do not silently discard material from the previous version.
